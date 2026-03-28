import type { NextFunction, Request, Response } from "express";

import environment from "@/environment.js";
import { verifyToken } from "@/utils/jwt.js";

export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization;

    // ? Check if user provided authorization header or not
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
      res.status(400);
      throw new Error("Authorization header not provided");
    }

    const accessToken = authorizationHeader.split("Bearer ")[1];

    // ? Check for the access token
    if (!accessToken) {
      res.status(400);
      throw new Error("Invalid JWT access token");
    }

    // * Verify access token
    const verifiedAccessToken = verifyToken(accessToken, environment.JWT_ACCESS_TOKEN_SECRET_KEY);
    req.user = verifiedAccessToken;

    next();
  } catch (error) {
    next(error);
  }
}
