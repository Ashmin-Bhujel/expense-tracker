import type { Types } from "mongoose";

import { TokenModel } from "@/models/token.model.js";

// * Save refresh token
export async function saveRefreshTokenService(
  userId: string | Types.ObjectId,
  refreshToken: string,
) {
  return await TokenModel.insertOne({ userId, refreshToken });
}

// ! Delete refresh token
export async function deleteRefreshTokenService(
  userId: string | Types.ObjectId,
  refreshToken: string,
) {
  return await TokenModel.findOneAndDelete({ $and: [{ userId }, { refreshToken }] });
}
