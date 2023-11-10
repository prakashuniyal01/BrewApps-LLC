// const { createLogger, transports, format } = require('winston');
// const { combine, timestamp, prettyPrint, simple } = format;

// const LOGGER = createLogger({
//     level: 'info',
//     format: combine(
//         // label({label: 'right new'}),
//         timestamp(),
//         prettyPrint()
//     ),
//     defaultMeta: { service: 'user-service' },
//     transports: [
//         //
//         // - Write all logs with importance level of `error` or less to `error.log`
//         // - Write all logs with importance level of `info` or less to `combined.log`
//         //
//         new transports.File({ filename: 'logs/error.log', level: 'error' }),
//         new transports.File({ filename: 'logs/combined.log' }),
//     ],
// });


// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `

// if (process.env.NODE_ENV !== 'production') {
//     LOGGER.add(new transports.Console({
//         format: simple()
//     }));
// }


// module.exports = { LOGGER }

const { createLogger, transports, format } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, simple } = format;

const is_dev = process.env.NODE_ENV === 'development';

const file_path = (prefix) => {
  let path = "logs"
  if (process.env.NODE_ENV === 'production') {
    path = "/var/log/falcon"
  }
  return `${path}/${prefix}-%DATE%.log`
}

const fileTransporter = (log_level) => {
  const path_prefix = log_level == 'info' ? 'all' : log_level;
  return new transports.DailyRotateFile({
    level: log_level,
    filename: file_path(path_prefix),
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d'
  });
}

const fileRotationTransport = fileTransporter('info');
const errorFileRotationTransport = fileTransporter('error')

const default_transports = !is_dev ? [
  fileRotationTransport,
  errorFileRotationTransport
] : [];

const LOGGER = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    simple()
  ),
  transports: default_transports,
});

if (is_dev) {
  LOGGER.add(new transports.Console({
    format: simple()
  }));
}

module.exports = { LOGGER }