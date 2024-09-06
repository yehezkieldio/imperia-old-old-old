import { OpenAPIHono } from "@hono/zod-openapi";

import { aggregatorEnv } from "@imperia/environment/aggregator";
import { ImperiaLogger } from "@imperia/logger";

import { apiReference } from "./api-reference";
import { healthcheck } from "./routes/healthcheck";

const app = new OpenAPIHono();
const routes = app.route("/", healthcheck);

apiReference(app);

const logger = new ImperiaLogger();
logger.info(`Aggregator is running on port ${aggregatorEnv.AGGREGATOR_PORT}`);

export type AppType = typeof routes;

export default {
    port: aggregatorEnv.AGGREGATOR_PORT,
    fetch: app.fetch,
};
