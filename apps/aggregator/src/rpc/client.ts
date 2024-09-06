import { hc } from "hono/client";

import { aggregatorEnv } from "@imperia/environment/aggregator";

import type { AppType } from "../main";

const url = `http://${aggregatorEnv.AGGREGATOR_HOST}:${aggregatorEnv.AGGREGATOR_PORT}`;

export const aggregatorClient = hc<AppType>(url);
