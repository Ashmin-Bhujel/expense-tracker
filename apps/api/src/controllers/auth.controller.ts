import type { CreateUserType } from "@expense-tracker/zod/user";
import type { NextFunction, Request, Response } from "express";

import { registerService } from "@/services/auth.service.js";
import { ApiResponse } from "@/utils/api-response.js";

// * Register
export async function registerController(
  req: Request<unknown, unknown, CreateUserType>,
  res: Response,
  next: NextFunction,
) {
  try {
    await registerService(req.body);

    return res.status(201).json(new ApiResponse("Registered a new user successfully"));
  } catch (error) {
    res.status(400);
    next(error);
  }
}
