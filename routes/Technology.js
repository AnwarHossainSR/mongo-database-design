import express from "express";
import {
  CreateTechnologies,
  GetAllTechnologies,
} from "../Controllers/TechnologyController.js";

const router = express.Router();

router.get("/", GetAllTechnologies);
router.post("/create", CreateTechnologies);
export default router;
