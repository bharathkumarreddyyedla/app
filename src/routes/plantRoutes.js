import express from "express";
import { verifyToken } from "../services/tokenValidation.js";
import {
  filterPlants,
  getAllPlants,
  getAllPlantsFromPerenual,
  getPlantFromPerenualById,
  getPlantsByUser,
  getSeasonalPlants,
  plantsFAQ,
  savePlant,
  searchPlants,
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
router.get("/getSeasonalPlants/:page/:season", verifyToken, getSeasonalPlants);
router.get("/searchPlants/:page/:keyword", verifyToken, searchPlants);
router.get(
  "/filterPlants/:page/:cycle/:watering/:sunlight",
  verifyToken,
  filterPlants
);
router.get("/plantFAQ", verifyToken, plantsFAQ);

export default router;
