import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";

const HealthCheckSchema = z
    .object({
        status: z.string(),
    })
    .openapi("Healthcheck");

const healthcheckRoute = createRoute({
    method: "get",
    path: "/healthcheck",
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: HealthCheckSchema,
                },
            },
            description: "Returns the health status of the service",
        },
    },
});

export const healthcheck = new OpenAPIHono().openapi(healthcheckRoute, (c) => {
    return c.json({
        status: "ok",
    });
});
