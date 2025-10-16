import { response } from "express";
import Notification from "../models/notification.js";
import User from "../models/user.js";
import { sendNotificationToExpo } from "../services/notificationService.js";
import fs from "fs";
import path from "path";
import http2 from "http2";
// const path = require("path");
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import axios from "axios";
import { fileURLToPath } from "url";
import { dirname } from "path";
import FCM from "fcm-node";
import admin from "firebase-admin";
// import { serviceAccount } from "./firabeConfig.js";
// import serviceAccount from "./docsein-c4d49-firebase-adminsdk-bsx08-5b35accf10.json";
// import serviceAccount from "./firabeConfig.json";
// const serviceAccount = require("./firabeConfig.json");
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// const serviceAccount = require("./docsein-c4d49-firebase-adminsdk-bsx08-5b35accf10.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://docsein-c4d49-default-rtdb.firebaseio.com",
// });
export const expoPushNotification = async (req, res) => {
  try {
    await sendNotificationToExpo(req.body)
      .then((response) => {
        console.log("response", response);

        return res.status(200).json({
          message: "Notification successfully Sent",
          result: response,
        });
      })
      .catch((err) => {
        return res.status(500).json({ error: err });
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getNotificationByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const notifications = await Notification.find({
      userId: id,
    });
    const user = await User.findById(id);
    const { firstName, lastName, profilePicture } = user.toObject();
    console.log("firstName", firstName);
    res.status(200).json({
      notifications,
      firstName: firstName || "",
      lastName: lastName || "",
      profilePicture: profilePicture || "",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const sendNotificationToAPNS = async (reqest, res) => {
  try {
    const { deviceToken = "", alertType = "", notification = {} } = reqest.body;
    console.log("deviceToken", deviceToken);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const key = fs.readFileSync(
      path.resolve(
        __dirname,
        "/Users/bharathreddy/Documents/AuthKey_MLZ446B5N3.p8"
      )
    );
    // console.log("jabsdjabdjabdjdba");
    const keyId = "MLZ446B5N3";
    const teamId = "U93FN39YZ4";
    const bundleId =
      alertType === "voip" ? "com.aciana.docisn.voip" : "com.aciana.docisn";
    const token = jwt.sign({}, key, {
      algorithm: "ES256",
      issuer: teamId,
      header: {
        alg: "ES256",
        kid: keyId,
      },
      expiresIn: "1h", // Token expiry time
    });
    // Device token
    // const deviceToken =
    //   "4b5e17dd242fdf2ed7b86e9460329cb2e038a5287bf2363f5f4e3ccfb1ce3693";

    // Notification payload
    const payload = JSON.stringify(notification);
    // for dev https://api.sandbox.push.apple.com Prod https://api.push.apple.com
    const client = http2.connect("https://api.sandbox.push.apple.com");
    client.on("error", (err) => console.error("Connection error:", err));

    const req = client.request({
      ":method": "POST",
      ":path": `/3/device/${deviceToken}`,
      "apns-topic": bundleId,
      "apns-push-type": alertType,
      authorization: `bearer ${token}`,
      "content-type": "application/json",
    });

    req.setEncoding("utf8");
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      console.log("chunk", chunk, data);
    });

    req.on("end", () => {
      console.log("Notification sent successfully:", data);
      client.close();
      res.status(200).json(data);
    });

    req.on("error", (error) => {
      console.error("Error sending notification:", error);
      client.close();
      res.status(200).json(error);
    });

    req.write(payload);
    req.end();

    // APNs request options
    // const options = {
    //   method: "POST",
    //   url: `https://api.sandbox.push.apple.com/3/device/${deviceToken}`,
    //   headers: {
    //     "apns-topic": bundleId,
    //     "apns-push-type": "background",
    //     authorization: `bearer ${token}`,
    //     "content-type": "application/json",
    //   },
    //   data: payload,
    // };

    // Send the notification
    // await axios
    //   .post(`https://api.sandbox.push.apple.com/3/device/${deviceToken}`, {
    //     headers: {
    //       "apns-topic": bundleId,
    //       "apns-push-type": "background",
    //       authorization: `bearer ${token}`,
    //       "content-type": "application/json",
    //     },
    //     data: payload,
    //   })
    //   .then((response) => {
    //     console.log("Notification sent successfully:", response.data);
    //     // res.status(200).json("dsjbhfb ");
    //   })
    //   .catch((error) => {
    //     console.error(
    //       "Error sending notification:",
    //       error
    //       // error.response ? error.response.data : error.message
    //     );
    //   });
    // res.status(501).json("");
  } catch (err) {
    console.log(err, "Error---->>>");
    //.status(500).json({ error: err.message });
  }
};
// export const sendFcmNotification = async (req, res) => {
//   console.log("sdjfhbvhjfdbkhjfdbjhfdbfjh");
//   let key =
//     "AAAA0yzwHB0:APA91bGosROyeBrZC4fo3LFxl6H1qXYe_dlrXnL8t9v_Is8f6CYat-hVPFy2qM0ygRHUrf_l43e2jQIVYonoOB2XvZFv2ZSd1p9ktuvnn_wroG2SvibMsIj47CyHh3eArEUSQ-OuS1Gv";

//   axios.post(
//     "https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send",
//     {
//       message: {
//         token:
//           "fzz2ecUWSkOXHpFGwekRpm:APA91bG4iWTpByIES_pCaCv6p5W25AV23EtRIp_M11mHNGOMUmvOFJo8S7mteusUbNRQUoVVO02Qufn79KGAEBsJc_TNrRqv83fxT0wOfhhvD6ZV-CjHmXDpSc3dwJ5OQ05BkJDYfiGO",
//         data: {
//           hello: "This is a Firebase Cloud Messaging device group message!",
//         },
//       },
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${key}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
// };
export const sendFcmNotification = (req, res) => {
  var serverKey =
    "AAAA0yzwHB0:APA91bGosROyeBrZC4fo3LFxl6H1qXYe_dlrXnL8t9v_Is8f6CYat-hVPFy2qM0ygRHUrf_l43e2jQIVYonoOB2XvZFv2ZSd1p9ktuvnn_wroG2SvibMsIj47CyHh3eArEUSQ-OuS1Gv"; //put your server key here
  var fcm = new FCM(serverKey);

  var message = {
    //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: "fzz2ecUWSkOXHpFGwekRpm:APA91bG4iWTpByIES_pCaCv6p5W25AV23EtRIp_M11mHNGOMUmvOFJo8S7mteusUbNRQUoVVO02Qufn79KGAEBsJc_TNrRqv83fxT0wOfhhvD6ZV-CjHmXDpSc3dwJ5OQ05BkJDYfiGO",
    collapse_key: "your_collapse_key",

    notification: {
      title: "Title of your push notification",
      body: "Body of your push notification",
    },

    // data: {
    //   //you can send only notification or only data(or include both)
    //   my_key: "my value",
    //   my_another_key: "my another value",
    // },
  };

  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!", err);
      res.status(500).json({ Message: err });
    } else {
      res.status(200).json({ Message: "succes" });
      console.log("Successfully sent with response: ", response);
    }
  });
};
async function getAccessToken() {
  const token = await admin.credential.cert(serviceAccount).getAccessToken();
  return token.access_token;
}
export const sendFcmUsingAdmin = async (req, res) => {
  const accessToken = await getAccessToken();
  const fcmUrl = `https://fcm.googleapis.com/v1/projects/docsein-c4d49/messages:send`;

  try {
    const response = await axios.post(fcmUrl, req.body, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Notification sent successfully:", response.data);
    res.status(200).json({ Message: response.data });
  } catch (error) {
    console.error(
      "Error sending notification:",
      error.response?.data || error.message
    );
    res.status(500).json({ Message: error });
  }
};
