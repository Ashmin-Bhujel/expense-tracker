import type { CreateUserType } from "@expense-tracker/zod/user";

import { UserModel } from "@/models/user.model.js";
import { hashPassword } from "@/utils/argon2.js";

// * Register
export async function registerService(createUserData: CreateUserType) {
  // ? Check if user with the same username exists or not
  const userWithTheSameUsername = await UserModel.findOne({
    username: createUserData.username,
  });
  if (userWithTheSameUsername) {
    throw new Error("User with the same username already exists");
  }

  // ? Check if user with the same email exists or not
  const userWithTheSameEmail = await UserModel.findOne({
    email: createUserData.email,
  });
  if (userWithTheSameEmail) {
    throw new Error("User with the same email already exists");
  }

  // * Create new user object
  const newUser = { ...createUserData };

  // * Hash the user password
  newUser.password = await hashPassword(newUser.password);

  // * Create new user
  await UserModel.insertOne(newUser);
}
