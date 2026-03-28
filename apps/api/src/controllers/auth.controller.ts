import type { CreateUserType, LoginUserType } from "@expense-tracker/zod/user";
import type { NextFunction, Request, Response } from "express";
import type { StringValue } from "ms";

import { cookieOptions } from "@/constants/cookie-parser.js";
import environment from "@/environment.js";
import { loginService, registerService } from "@/services/auth.service.js";
import { ApiResponse } from "@/utils/api-response.js";
import ms from "ms";

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

    // * Set cookies
    res.cookie("accessToken", user.accessToken, {
      ...cookieOptions,
      expires: new Date(
        Date.now() + ms(environment.JWT_ACCESS_TOKEN_EXPIRES_IN as StringValue) + ms("2m"),
      ),
    });
    res.cookie("refreshToken", user.refreshToken, {
      ...cookieOptions,
      expires: new Date(
        Date.now() + ms(environment.JWT_REFRESH_TOKEN_EXPIRES_IN as StringValue) + ms("2m"),
      ),
    });

    return res.json(new ApiResponse("User logged in successfully", { user }));
  } catch (error) {
    next(error);
  }
}
