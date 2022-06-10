import express from "express";
import {
  GetAllCandidateRole,
  CreateCandidateRole,
} from "../Controllers/CandidateRoleController.js";

const router = express.Router();

router.get("/", GetAllCandidateRole);
router.post("/create", CreateCandidateRole);
export default router;
