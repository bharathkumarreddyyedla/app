// signaling.js
import { WebSocketServer } from "ws";

export default function initSignalingServer(server) {
  const wss = new WebSocketServer({ server });
  const rooms = new Map(); // roomName -> Set<WebSocket>

  const safeSend = (ws, obj) => {
    try {
      ws.send(JSON.stringify(obj));
    } catch {}
  };

  wss.on("connection", (ws) => {
    console.log("connection called");
    ws.room = null;

    ws.on("message", (raw) => {
      let msg;
      try {
        msg = JSON.parse(raw.toString());
      } catch (e) {
        return safeSend(ws, { type: "error", reason: "bad-json" });
      }

      const { room, type, payload } = msg || {};
      console.log("type", type);
      if (!type) return;
      if (type === "join") {
        if (!room) return safeSend(ws, { type: "error", reason: "no-room" });
        if (!rooms.has(room)) rooms.set(room, new Set());
        rooms.get(room).add(ws);
        ws.room = room;
        // Tell others that a peer joined
        // for (const client of rooms.get(room)) {
        //   if (client !== ws) safeSend(client, { type: "peer-joined" });
        // }
        return;
      }
      console.log("rooms", rooms);
      // Relay any signaling messages to others in the same room
      if (ws.room && rooms.has(ws.room)) {
        for (const client of rooms.get(ws.room)) {
          if (client !== ws) safeSend(client, { type, payload });
        }
      }
    });

    ws.on("close", () => {
      const room = ws.room;
      if (room && rooms.has(room)) {
        rooms.get(room).delete(ws);
        for (const client of rooms.get(room)) {
          safeSend(client, { type: "peer-left" });
        }
        if (rooms.get(room).size === 0) rooms.delete(room);
      }
    });
  });
}
