import type { BunFile } from "bun";
import type { PackageJson } from "type-fest";

export const getVersion = async (): Promise<string> => {
    const file: BunFile = Bun.file(Bun.pathToFileURL("package.json"));

    if (!(await file.exists())) {
        throw new Error("The package.json file does not exist.");
    }

    const contents: PackageJson = await file.json();
    return contents.version as string;
};

export const getDescription = async (): Promise<string> => {
    const file: BunFile = Bun.file(Bun.pathToFileURL("package.json"));

    if (!(await file.exists())) {
        throw new Error("The package.json file does not exist.");
    }

    const contents: PackageJson = await file.json();
    return contents.description as string;
};

export const getName = async (): Promise<string> => {
    const file: BunFile = Bun.file(Bun.pathToFileURL("package.json"));

    if (!(await file.exists())) {
        throw new Error("The package.json file does not exist.");
    }

    const contents: PackageJson = await file.json();
    const name = contents.name as string;

    return name
        .split("/")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
