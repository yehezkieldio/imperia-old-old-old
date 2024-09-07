import { discordBotEnv } from "@imperia/environment/bot";

import { configuration } from "#lib/configuration";
import { ImperiaClient } from "#lib/extensions/client";

export async function main(): Promise<void> {
    const client = new ImperiaClient(configuration);
    await client.login(discordBotEnv.DISCORD_TOKEN);

    process.on("SIGINT", async (): Promise<void> => {
        await client.destroy().then((): never => {
            process.exit();
        });
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
