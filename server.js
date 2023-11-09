require('dotenv').config();

const { app } = require('./api/app')
const {LOGGER} = require("./common/logger");

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    LOGGER.info(`server started on port ${PORT}`)
})