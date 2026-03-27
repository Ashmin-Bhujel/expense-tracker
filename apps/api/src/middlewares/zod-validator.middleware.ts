import type { NextFunction, Request, Response } from "express";

import * as z from "zod";

// * Types
type ToBeValidateType = "body" | "query" | "params";

// * Zod validator middleware
export function zodValidator<SchemaType extends z.ZodSchema>(
  toBeValidate: ToBeValidateType,
  zodSchema: SchemaType,
) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { success, data: _data, error } = zodSchema.safeParse(req[toBeValidate]);

      if (!success) {
        res.statusCode = 400;
        throw error;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}
