import express from "express";
import {
  CreateQuestionSet,
  GetAllQuestionSets,
} from "../Controllers/QuestionSet.js";

const router = express.Router();

router.get("/", GetAllQuestionSets);
router.post("/create", CreateQuestionSet);
export default router;
