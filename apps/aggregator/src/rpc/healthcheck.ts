import { client } from "./client";

export async function getHealthcheck(): Promise<boolean> {
    try {
        await client.healthcheck.$get();

        return true;
    } catch (error) {
        if (error instanceof Error) {
            if (error.message.startsWith("Unable to connect.")) {
                return false;
            }
            throw error;
        }

        return false;
    }
}
