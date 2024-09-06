import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

import { sharedEnv } from "./shared";

export const aggregatorEnv = {
    ...sharedEnv,

    ...createEnv({
        server: {
            AGGREGATOR_HOST: z.string().default("localhost"),
            AGGREGATOR_PORT: z.string().default("3000"),
        },
        runtimeEnv: process.env,
    }),
};
