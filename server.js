require('dotenv').config();

const { app } = require('./api/app')
const {LOGGER} = require("./common/logger");
const { monogdb_connection } = require('./api/db/mongos');
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    LOGGER.info(`server started on port http://localhost:${PORT}`)
})
monogdb_connection();