import express from "express";
import { getCalorieDetails } from "../controllers/aiController.js";
const router = express.Router();
router.post("/getFoodCalorieDetails", getCalorieDetails);
export default router;
