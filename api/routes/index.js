const {Router} = require('express');
const { StatusCodes } = require('http-status-codes')
 const { v1Router } = require('./v1')

const appRoutes = Router();

appRoutes.get('/books',(req, res) => res.status(StatusCodes.OK).json('working'));
appRoutes.use('/v1', v1Router);

module.exports = {appRoutes};