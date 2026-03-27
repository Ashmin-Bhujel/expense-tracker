import { registerController } from "@/controllers/auth.controller.js";
import { Router } from "express";

// * Auth router
export const authRouter = Router();

// * POST
authRouter.post("/register", registerController);
