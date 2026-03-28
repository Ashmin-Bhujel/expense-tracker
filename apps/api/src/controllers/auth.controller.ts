import type { CreateUserType, LoginUserType } from "@expense-tracker/zod/user";
import type { NextFunction, Request, Response } from "express";

import { loginService, registerService } from "@/services/auth.service.js";
import { ApiResponse } from "@/utils/api-response.js";

// * Register
export async function registerController(
  req: Request<unknown, unknown, CreateUserType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const createUserData = req.body;
    await registerService(res, createUserData);

    return res.status(201).json(new ApiResponse("Registered a new user successfully"));
  } catch (error) {
    next(error);
  }
}

// * Login
export async function loginController(
  req: Request<unknown, unknown, LoginUserType>,
  res: Response,
  next: NextFunction,
) {
  try {
    const loginUserData = req.body;
    const user = await loginService(res, loginUserData);

    return res.json(new ApiResponse("User logged in successfully", { user }));
  } catch (error) {
    next(error);
  }
}
