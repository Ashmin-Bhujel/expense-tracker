import { getUsersController } from "@/controllers/user.controller.js";
import { Router } from "express";

// * User router
export const userRouter = Router();

// * GET
userRouter.get("/", getUsersController);
