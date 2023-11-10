const {Schema, model} = require('mongoose');
const { MONGO_COLLECTION_OPTIONS } = require('../../utils/mongo_collection')

const books_schema = {
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "title should have minimum 3 characters"],
        maxLength: [150, "title cannot have more than 150 characters"]
    },
    author:{
        type: String,
        required: true,
        trim: true,
        minLength: [2, "title should have minimum 3 characters"],
        maxLength: [50, "title cannot have more than 150 characters"]
    },
    summary: {
        type: String,
        required: true,
        trim: true,
        minLength: [50, "description should have minimum 50 characters"],
        maxLength: [1000, "description cannot have more than 1000 characters"]
    },
    deleted: {
        type: Boolean,
        default: false,
        required: false
    }
}

const book_schema = new Schema(books_schema, MONGO_COLLECTION_OPTIONS);

const Books = model('books', book_schema);

module.exports = {Books};