import type { JwtPayload } from "jsonwebtoken";

module "express" {
  interface Request {
    user?: JwtPayload<{
      id: string;
      username: string;
      email: string;
      iat: number;
      exp: number;
    }>;
  }
}
