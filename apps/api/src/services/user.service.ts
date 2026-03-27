import type { IUser } from "@/models/user.model.js";

import { UserModel } from "@/models/user.model.js";

// * Get users
export async function getUsersService() {
  const users: IUser[] | null = await UserModel.find();

  // ? Check if returned users or not
  if (!users) {
    throw new Error("Failed to get users data");
  }

  return users;
}
