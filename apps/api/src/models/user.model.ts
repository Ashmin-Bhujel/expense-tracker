import type { CreateUserType } from "@expense-tracker/zod/user";
import type { Document } from "mongoose";

import { Schema, model } from "mongoose";

// * Types
export type IUserType = Document & CreateUserType;

// * Schema
export const userMongooseSchema = new Schema<IUserType>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatarURL: {
      type: String,
      required: false,
      default: "",
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

// * Model
export const UserModel = model("User", userMongooseSchema);
