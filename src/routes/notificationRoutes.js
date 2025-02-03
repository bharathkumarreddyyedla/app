import express from "express";
import { verifyToken } from "../services/tokenValidation.js";
import {
  expoPushNotification,
  getNotificationByUser,
  sendFcmNotification,
  sendFcmUsingAdmin,
  sendNotificationToAPNS,
} from "../controllers/notificationController.js";

const router = express.Router();
router.post("/sendNotification", verifyToken, expoPushNotification);
router.get("/getAllNotifications/:id", verifyToken, getNotificationByUser);
router.post("/sendNotificationToAPNS", sendNotificationToAPNS);
router.get("/sendFcmNotification", sendFcmNotification);
router.post("/sendFcmUsingAdmin", sendFcmUsingAdmin);
// router.get("/getAllPost", verifyToken, getAllPosts);
// router.put("/updatePost", verifyToken, updatePostsByUser);

export default router;
