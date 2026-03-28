import type { NextFunction, Request, Response } from "express";

import { getUsersService } from "@/services/user.service.js";
import { ApiResponse } from "@/utils/api-response.js";

// * Get users
export async function getUsersController(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getUsersService(res);

    return res.json(new ApiResponse("Fetched users successfully", { users }));
  } catch (error) {
    next(error);
  }
}
