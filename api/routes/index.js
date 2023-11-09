const {Router} = require('express');
const { StatusCodes } = require('http-status-codes')
 

const appRoutes = Router();

appRoutes.use('/v1',(req, res) => res.status(StatusCodes.OK).json('working'));


module.exports = {appRoutes};