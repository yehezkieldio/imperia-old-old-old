import { OpenAPIHono } from "@hono/zod-openapi";

import { ImperiaLogger } from "@imperia/logger";
import { apiReference } from "./api-reference";
import { healthcheck } from "./routes/healthcheck";

const app = new OpenAPIHono();
const routes = app.route("/", healthcheck);

apiReference(app);

const logger = new ImperiaLogger();
logger.info("Aggregator is running on port 3000");

export type AppType = typeof routes;

export default {
    port: 3000,
    fetch: app.fetch,
};
