import { getHealthcheck } from "@imperia/aggregator/rpc/health";
import { ImperiaLogger } from "@imperia/logger";

const logger = new ImperiaLogger();
const isHealthy = await getHealthcheck();

if (!isHealthy) {
    logger.error("Aggregator is not healthy.");
    process.exit(1);
} else {
    logger.info("Aggregator is healthy.");
}
