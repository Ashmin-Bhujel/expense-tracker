import type {
  CreateUserType,
  LoginUserResponseType,
  LoginUserType,
} from "@expense-tracker/zod/user";
import type { Response } from "express";

import { hashPassword, verifyPassword } from "@/utils/argon2.js";
import { generateJWTTokens } from "@/utils/jwt.js";
import { saveRefreshToken } from "./token.service.js";
import {
  checkUserWithSameEmailService,
  checkUserWithSameUsernameService,
  createUserService,
  getUserByEmailService,
} from "./user.service.js";

// * Register
export async function registerService(res: Response, createUserData: CreateUserType) {
  // ? Check if user with the same username exists or not
  const userWithTheSameUsername = await checkUserWithSameUsernameService(createUserData.username);
  if (userWithTheSameUsername) {
    res.status(409);
    throw new Error("User with the same username already exists");
  }

  // ? Check if user with the same email exists or not
  const userWithTheSameEmail = await checkUserWithSameEmailService(createUserData.email);
  if (userWithTheSameEmail) {
    res.status(409);
    throw new Error("User with the same email already exists");
  }

  // * Create new user object
  const newUser = { ...createUserData };

  // * Hash the user password
  newUser.password = await hashPassword(newUser.password);

  // * Create new user
  await createUserService(newUser);
}

// * Login
export async function loginService(res: Response, loginUserData: LoginUserType) {
  // * Fetch user from database
  const user = await getUserByEmailService(res, loginUserData.email, true);

  // ? Is the user authentic user
  const isValidUser = await verifyPassword(user.password, loginUserData.password);
  if (!isValidUser) {
    res.status(401);
    throw new Error("Unauthorized user");
  }

  // * Generate JWT tokens for the user
  const { accessToken, refreshToken } = generateJWTTokens({
    id: String(user._id),
    username: user.username,
    email: user.email,
  });

  // * Save refresh token
  await saveRefreshToken(user._id, refreshToken);

  // * Create response user
  const loginResponseUser = {
    ...user.toObject(),
    accessToken,
    refreshToken,
  };
  // ! Delete password entry from the response user
  delete loginResponseUser?.password;

  return loginResponseUser as LoginUserResponseType;
}
