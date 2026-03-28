import {
  loginController,
  logoutController,
  registerController,
} from "@/controllers/auth.controller.js";
import { auth } from "@/middlewares/auth.middleware.js";
import { zodValidator } from "@/middlewares/zod-validator.middleware.js";
import { createUserZodSchema, loginUserZodSchema } from "@expense-tracker/zod/user";
import { Router } from "express";

// * Auth router
export const authRouter = Router();

// * POST
authRouter.post("/register", zodValidator("body", createUserZodSchema), registerController);
authRouter.post("/login", zodValidator("body", loginUserZodSchema), loginController);

// * DELETE
authRouter.delete("/logout", auth, logoutController);
