import type { CookieOptions } from "express";

import environment from "@/environment.js";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: environment.NODE_ENV === "production" ? true : false,
  sameSite: "strict",
};
