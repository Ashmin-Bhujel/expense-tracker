import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import environment from "./environment.js";
import { auth } from "./middlewares/auth.middleware.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { authRouter } from "./routes/auth.route.js";
import { userRouter } from "./routes/user.route.js";
import { ApiResponse } from "./utils/api-response.js";

// * Express config
export const app = express();

// * Middlewares
app.use(
  cors({
    origin: environment.CORS_ORIGIN,
  }),
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cookieParser());
// * Logger
if (environment.NODE_ENV === "development") {
  app.use(logger);
}

// * Routes
app.get("/", (_req, res) => {
  return res.json(new ApiResponse("Server is up and running"));
});
// * Auth
app.use("/api/auth", authRouter);
// * Users
app.use("/api/users", auth, userRouter);

// * Not found route handler
app.use(notFound);

// * Error handler
app.use(errorHandler);
