import { describe, expect, test } from "bun:test";

import { getVersion } from "../src/package";

describe("package.json functions", () => {
    test("getVersion returns a string", async () => {
        const version = await getVersion();
        expect(typeof version).toBe("string");
    });
});
