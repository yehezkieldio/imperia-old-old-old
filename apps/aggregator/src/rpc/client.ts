import { hc } from "hono/client";

import type { AppType } from "../main";

const url = "http://localhost:3000";

export const aggregatorClient = hc<AppType>(url);
