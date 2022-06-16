import express from "express";
import {
  CreateFinalCandidate,
  GetAllFinalCandidate,
} from "../Controllers/FinalCandidate.js";

const router = express.Router();

router.get("/", GetAllFinalCandidate);
router.post("/create", CreateFinalCandidate);

export default router;
