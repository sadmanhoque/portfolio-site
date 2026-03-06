import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

// Serve static files from /public
app.use("/*", serveStatic({ root: "./src2" }));

export default {
  port: 3000,
  fetch: app.fetch,
};