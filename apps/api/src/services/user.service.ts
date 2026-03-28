import type { IUserType } from "@/models/user.model.js";
import type { CreateUserType } from "@expense-tracker/zod/user";
import type { Response } from "express";

import { UserModel } from "@/models/user.model.js";

// * Get users
export async function getUsersService(res: Response) {
  const users: IUserType[] | null = await UserModel.find();

  // ? Check if returned users or not
  if (!users) {
    res.status(404);
    throw new Error("Failed to get users data");
  }

  return users;
}

// * Get user by username
export async function getUserByUsernameService(res: Response, username: string) {
  const user: IUserType | null = await UserModel.findOne({ username });

  // ? Check if returned user or not
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  return user;
}

// * Check user with same username
export async function checkUserWithSameUsernameService(username: string) {
  return await UserModel.exists({ username });
}

// * Get user by email
export async function getUserByEmailService(
  res: Response,
  email: string,
  returnPassword: boolean = false,
) {
  const user: IUserType | null = await UserModel.findOne({ email }).select(
    returnPassword ? "+password" : "",
  );

  // ? Check if returned user or not
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  return user;
}

// * Check user with same email
export async function checkUserWithSameEmailService(email: string) {
  return await UserModel.exists({ email });
}

// * Create user
export async function createUserService(userData: CreateUserType) {
  return await UserModel.insertOne(userData);
}
