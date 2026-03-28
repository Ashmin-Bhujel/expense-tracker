import type { Types } from "mongoose";

import { TokenModel } from "@/models/token.model.js";

// * Save refresh token
export async function saveRefreshToken(userId: Types.ObjectId, refreshToken: string) {
  return await TokenModel.insertOne({ userId, refreshToken });
}
