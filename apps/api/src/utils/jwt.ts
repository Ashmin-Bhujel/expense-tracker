import type { UserType } from "@expense-tracker/zod/user";

import environment from "@/environment.js";
import jwt from "jsonwebtoken";

// * Types
type GenerateTokenParamType = Pick<UserType, "id" | "username" | "email">;

// * Generate access token
export function generateAccessToken({ id, username, email }: GenerateTokenParamType) {
  return jwt.sign({ id, username, email }, environment.JWT_ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: environment.JWT_ACCESS_TOKEN_EXPIRES_IN as unknown as number,
  });
}

// * Generate refresh token
export function generateRefreshToken({ id, username, email }: GenerateTokenParamType) {
  return jwt.sign({ id, username, email }, environment.JWT_REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: environment.JWT_REFRESH_TOKEN_EXPIRES_IN as unknown as number,
  });
}

// * Generate JWT tokens
export function generateJWTTokens({ id, username, email }: GenerateTokenParamType) {
  const accessToken = generateAccessToken({ id, username, email });
  const refreshToken = generateRefreshToken({ id, username, email });

  return {
    accessToken,
    refreshToken,
  };
}

// * Verify token
export function verifyToken(token: string, tokenSecret: string) {
  return jwt.verify(token, tokenSecret);
}
