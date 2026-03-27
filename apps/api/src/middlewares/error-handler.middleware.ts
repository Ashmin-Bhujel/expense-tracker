import type { NextFunction, Request, Response } from "express";

import { ApiError } from "@/utils/api-error.js";
import { MongooseError } from "mongoose";
import { ZodError } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  // * Handle mongoose errors
  if (error instanceof MongooseError) {
    return res.json(new ApiError(`Mongoose Error: ${error.name}`, [error.message]));
  }

  // * Handle zod errors
  if (error instanceof ZodError) {
    return res.json(new ApiError(`Validation Error: ${error.name}`, null, error.issues));
  }

  // * Handle thrown errors
  if (error instanceof Error) {
    return res.json(new ApiError(error.message));
  }

  // * Handle any other errors
  return res.json(new ApiError("Something went wrong"));
}
