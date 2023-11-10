const {Router} = require('express');
const { book_controller } = require('./controller')

const bookRouter = Router();

// bookRouter.get('/', async (req, res) => book_controller.paginatedFind(res, req.query, {deleted: false}))

// bookRouter.get('/:books_id', async (req, res) => book_controller.findById(res, req.params.books_id));

// bookRouter.post('/', async (req, res) => book_controller.create(res, req.body));

// bookRouter.put('/:books_id', async (req, res) => book_controller.update(res, req.params.books_id, req.body))

// bookRouter.delete('/:books_id', async (req, res) => book_controller.delete(res, req.params.books_id))



bookRouter
        .get('/', async (req, res) => book_controller.paginatedFind(res, req.query, {deleted: false}))
        .get('/:books_id', async (req, res) => book_controller.findById(res, req.params.books_id))
        .post('/', async (req, res) => book_controller.create(res, req.body))
        .put('/:books_id', async (req, res) => book_controller.update(res, req.params.books_id, req.body))
        .delete('/:books_id', async (req, res) => book_controller.delete(res, req.params.books_id))

module.exports = { bookRouter }