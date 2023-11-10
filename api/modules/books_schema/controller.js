
// const {StatusCode} = require('http-status-codes');

// const getAllBooks= async(req, res) => {};
// const getBooksUsingId = async(req, res) => {};
// const createBooks = async(req, res) => {};
// const updateBooks = async(req, res) => {};
// const deleteBooks = async(req, res) => {};


// const  book_controller = { 
//     getAllBooks , getBooksUsingId , createBooks, updateBooks, deleteBooks
// }
// module.exports = {book_controller};

const {Books} = require('./model')
const { CRUDController } = require('../../../common/controller')
const book_controller = new CRUDController(Books)

module.exports = {book_controller}