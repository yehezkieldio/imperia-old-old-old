import { ImperiaLogger } from "../src/logger";

const logger = new ImperiaLogger();

logger.info("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
logger.warn("Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
logger.error(
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
);
logger.fatal("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
logger.debug(
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
);
logger.trace("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
