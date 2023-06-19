import express from "express";
import { verifyToken } from "../services/tokenValidation.js";
import {
  getAllPlants,
  getAllPlantsFromPerenual,
  getPlantFromPerenualById,
  getPlantsByUser,
  savePlant,
  updatePlant,
} from "../controllers/plantController.js";

const router = express.Router();
router.post("/addPlant", verifyToken, savePlant);
router.put("/updatePlant/:id", verifyToken, updatePlant);
router.get("/getAllPlants", verifyToken, getAllPlants);
router.get("/getPlantsByUser/:id", verifyToken, getPlantsByUser);
router.get(
  "/getAllPlantFromPerenual/:page",
  verifyToken,
  getAllPlantsFromPerenual
);
router.get(
  "/getPlantFromPerenualById/:id",
  verifyToken,
  getPlantFromPerenualById
);

export default router;
