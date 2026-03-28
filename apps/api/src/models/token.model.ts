import type { Document } from "mongoose";

import { Schema, Types, model } from "mongoose";
import { UserModel } from "./user.model.js";

// * Types
export type ITokenType = Document;

// * Schema
export const tokenMongooseSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: UserModel,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

// * Model
export const TokenModel = model("Token", tokenMongooseSchema);
