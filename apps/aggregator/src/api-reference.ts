import type { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference as scalar } from "@scalar/hono-api-reference";

export const apiReference = async (app: OpenAPIHono) => {
    app.doc("/doc", {
        openapi: "3.0.0",
        info: {
            version: "0.0.0",
            title: "Imperia Aggregator",
            description: "An aggregator service that consolidates multiple APIs into a unified endpoint.",
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
