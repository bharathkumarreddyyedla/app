import express from "express";
import {
  generateDietPlan,
  getCalorieDetails,
} from "../controllers/aiController.js";
const router = express.Router();
router.post("/getFoodCalorieDetails", getCalorieDetails);
router.post("/generateDietPlanWithAI", generateDietPlan);
export default router;
