import { createLogger, transports, format } from 'winston';

const { combine, colorize, timestamp, printf } = format;

export const console = new transports.Console({
  format: combine(
    colorize(),
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `[${level}] [${timestamp}] message: ${message}`;
    })
  ),
});

export const logger = createLogger({
  transports: [console],
});
