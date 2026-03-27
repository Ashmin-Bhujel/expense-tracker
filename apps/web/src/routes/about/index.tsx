import { createFileRoute } from "@tanstack/react-router";
import About from "./-index";

export const Route = createFileRoute("/about/")({
  component: About,
});
