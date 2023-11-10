const { bookRouter } = require("./books_schema/routes");

const APP_ROUTER = [
    {
        path:'/books',
        router: bookRouter
    }
]

module.exports = { APP_ROUTER }