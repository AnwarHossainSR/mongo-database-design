import express from "express";
import { CreateRole, GetAllRole } from "../Controllers/RoleController.js";

const router = express.Router();

router.get("/", GetAllRole);
router.post("/create", CreateRole);
export default router;
