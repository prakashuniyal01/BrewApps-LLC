const { createLogger, transports, format } = require('winston');
const { combine, timestamp, prettyPrint, label } = format;

const LOGGER = createLogger({
    level: 'info',
    format: combine(
        label({label: 'right new'}),
        timestamp(),
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
    ],
});


// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `

if (process.env.NODE_ENV !== 'production') {
    LOGGER.add(new transports.Console({
        format: combine(
            timestamp(),
            prettyPrint()
        ),
    }));
}


module.exports = { LOGGER }