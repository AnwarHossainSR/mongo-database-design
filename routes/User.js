import express from "express";
import { CreateUser, GetAllUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/", GetAllUser);
router.post("/create", CreateUser);
export default router;
