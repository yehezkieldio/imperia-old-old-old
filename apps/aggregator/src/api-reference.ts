import type { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference as scalar } from "@scalar/hono-api-reference";

import { getDescription, getName, getVersion } from "@imperia/utils/package";

export const apiReference = async (app: OpenAPIHono) => {
    app.doc("/doc", {
        openapi: "3.0.0",
        info: {
            version: await getVersion(),
            title: await getName(),
            description: await getDescription(),
        },
    });

    app.get(
        "/reference",
        scalar({
            theme: "purple",
            darkMode: true,
            spec: {
                url: "/doc",
            },
        }),
    );
};
