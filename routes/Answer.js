import express from "express";
import {
  CreateCandidateAnswer,
  GetAllAnswer,
} from "../Controllers/AnswerController.js";

const router = express.Router();

router.get("/", GetAllAnswer);
router.post("/create", CreateCandidateAnswer);

export default router;
