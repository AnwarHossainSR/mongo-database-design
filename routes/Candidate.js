import express from "express";
import {
  CreateCandidate,
  GetAllCandidate,
} from "../Controllers/CandidateController.js";

const router = express.Router();

router.get("/", GetAllCandidate);
router.post("/create", CreateCandidate);
export default router;
