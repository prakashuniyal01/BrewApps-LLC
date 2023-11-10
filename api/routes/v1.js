const {Router} = require('express');
const { APP_ROUTER } = require('../modules')

const v1Router = Router();

APP_ROUTER.forEach(module => v1Router.use(
    module.path, module.router
))

module.exports = { v1Router }