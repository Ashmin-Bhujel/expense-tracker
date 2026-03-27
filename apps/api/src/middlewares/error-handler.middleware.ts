import type { NextFunction, Request, Response } from "express";

import { ApiError } from "@/utils/api-error.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  if (error instanceof Error) {
    return res.json(new ApiError(error.message));
  }

  return res.json(new ApiError("Something went wrong"));
}
