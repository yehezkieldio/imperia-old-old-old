import { createEnv } from "@t3-oss/env-core";

import { sharedEnv } from "./shared";

export const websiteEnv = {
    ...sharedEnv,

    ...createEnv({
        server: {},
        runtimeEnv: process.env,
    }),
};
