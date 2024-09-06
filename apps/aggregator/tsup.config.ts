import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/*.test.ts*"],
    clean: true,
    minify: true,
    skipNodeModulesBundle: true,
    keepNames: true,
    tsconfig: "tsconfig.json",
    noExternal: ["@imperia/logger", "@imperia/environment", "@imperia/utils"],
});
