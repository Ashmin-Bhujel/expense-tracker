import express from "express";
import { notFound } from "./middlewares/not-found.middleware.js";

// * Express config
export const app = express();

// * Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// * Routes
app.get("/", (_req, res) => {
  return res.status(200).json({
    message: "Server is up and running",
  });
});

// * Not found route handler
app.use(notFound);
