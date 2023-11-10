const express = require('express');
const { rateLimit } = require('express-rate-limit');
const morgan = require('morgan')

const {appRoutes} = require('./routes');
const {logErrors, clientErrorHandler, errorHandler} = require('../common/error')

const app = express();
const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // Set `RateLimit` and `RateLimit-Policy` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to API calls only
app.use(express.json()) // deserialization.
app.use(morgan('combined')) // register entry.


app.use('/api', apiRateLimiter) // rate limiting
app.use('/api', appRoutes)

// always at the end!
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)


module.exports = {app}