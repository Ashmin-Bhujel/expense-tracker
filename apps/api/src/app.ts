import express from "express";
import environment from "./environment.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { ApiResponse } from "./utils/api-response.js";

// * Express config
export const app = express();

// * Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// * Logger
if (environment.NODE_ENV === "development") {
  app.use(logger);
}

// * Routes
app.get("/", (_req, res) => {
  return res.json(new ApiResponse("Server is up and running"));
});

// * Not found route handler
app.use(notFound);

// * Error handler
app.use(errorHandler);
