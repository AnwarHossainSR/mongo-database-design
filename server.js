import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import CandidatRoleRoute from "./routes/CandidateRole.js";
import ExamRoute from "./routes/Exam.js";
import QuestionRoute from "./routes/Question.js";
import QuestionSetRoute from "./routes/QuestionSet.js";
import QuestionTypeRoute from "./routes/QuestionType.js";
import RoleRoute from "./routes/Role.js";
import Technology from "./routes/Technology.js";
import UserRoute from "./routes/User.js";
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("mongodb connected...");
      console.log(`Listening at 5000`);
    })
  )
  .catch((error) => console.log(error));

// usage of routes
app.use("/role", RoleRoute);
app.use("/user", UserRoute);
app.use("/technology", Technology);
app.use("/candidate-role", CandidatRoleRoute);
app.use("/question-type", QuestionTypeRoute);
app.use("/question", QuestionRoute);
app.use("/question-set", QuestionSetRoute);
app.use("/exam", ExamRoute);
