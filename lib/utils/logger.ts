type LogLevel = "info" | "error" | "warn";

export const logger = {
  log: (level: LogLevel, message: string, extra?: any) => {
    const timestamp = new Date().toISOString();
    const logData = {
      timestamp,
      level,
      message,
      ...(extra && { extra }),
    };

    if (process.env.NODE_ENV === "production") {
      console.log(JSON.stringify(logData));
    } else {
      console.log(
        `[${timestamp}] ${level.toUpperCase()}: ${message}`,
        extra ? extra : ""
      );
    }
  },
};
