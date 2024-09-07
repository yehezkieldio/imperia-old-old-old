import pc from "picocolors";
import pino from "pino";

export enum LogLevel {
    Trace = 10,
    Debug = 20,
    Info = 30,
    Warn = 40,
    Error = 50,
    Fatal = 60,
    None = 100,
}

interface ILogger {
    has(level: LogLevel): boolean;
    trace(...values: readonly unknown[]): void;
    debug(...values: readonly unknown[]): void;
    info(...values: readonly unknown[]): void;
    warn(...values: readonly unknown[]): void;
    error(...values: readonly unknown[]): void;
    fatal(...values: readonly unknown[]): void;
    write(level: LogLevel, ...values: readonly unknown[]): void;
}

type PinoLogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export class ImperiaLogger implements ILogger {
    private logger: pino.Logger;
    private stream: NodeJS.WritableStream;
    private minLevel: LogLevel;

    constructor(minLevel: LogLevel = LogLevel.Trace, options?: pino.LoggerOptions) {
        this.logger = pino({
            customLevels: {
                trace: 10,
                debug: 20,
                info: 30,
                warn: 40,
                error: 50,
                fatal: 60,
            },
            useOnlyCustomLevels: true,
            level: "trace",
            ...options,
        });

        this.stream = process.stdout;
        this.minLevel = minLevel;
    }

    has(level: LogLevel): boolean {
        return level >= this.minLevel;
    }

    trace(...values: readonly unknown[]): void {
        this.write(LogLevel.Trace, ...values);
    }

    debug(...values: readonly unknown[]): void {
        this.write(LogLevel.Debug, ...values);
    }

    info(...values: readonly unknown[]): void {
        this.write(LogLevel.Info, ...values);
    }

    warn(...values: readonly unknown[]): void {
        this.write(LogLevel.Warn, ...values);
    }

    error(...values: readonly unknown[]): void {
        this.write(LogLevel.Error, ...values);
    }

    fatal(...values: readonly unknown[]): void {
        this.write(LogLevel.Fatal, ...values);
    }

    write(level: LogLevel, ...values: readonly unknown[]): void {
        const pinoLevel = LogLevel[level].toLowerCase() as PinoLogLevel;

        if (this.isValidLogLevel(pinoLevel)) {
            if (this.has(level)) {
                const logMessage = {
                    time: new Date().toISOString(),
                    message: values.length === 1 ? values[0] : values,
                };

                this.stream.write(`${this.colorizeLevel(pinoLevel).padEnd(18)} ${logMessage.message}\n`);
            }
        } else {
            console.error(`Invalid log level: ${pinoLevel}`);
        }
    }

    private isValidLogLevel(level: string): level is PinoLogLevel {
        return ["trace", "debug", "info", "warn", "error", "fatal"].includes(level);
    }

    private colorizeLevel(level: PinoLogLevel): string {
        switch (level) {
            case "trace":
                return pc.cyan(level.toUpperCase());
            case "debug":
                return pc.blue(level.toUpperCase());
            case "info":
                return pc.green(level.toUpperCase());
            case "warn":
                return pc.yellow(level.toUpperCase());
            case "error":
                return pc.red(level.toUpperCase());
            case "fatal":
                return pc.magenta(level.toUpperCase());
            default:
                return level;
        }
    }
}
