import type { NextFunction, Request, Response } from "express";

import environment from "@/environment.js";
import { verifyToken } from "@/utils/jwt.js";

export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization;

    const accessToken = authorizationHeader?.split("Bearer ")[1] || req.cookies["accessToken"];

    // ? Check for the access token
    if (!accessToken) {
      throw new Error("Invalid access token");
    }

    // * Verify access token
    const verifiedAccessToken = verifyToken(accessToken, environment.JWT_ACCESS_TOKEN_SECRET_KEY);
    req.user = verifiedAccessToken;

    next();
  } catch (error) {
    res.status(400);
    next(error);
  }
}
