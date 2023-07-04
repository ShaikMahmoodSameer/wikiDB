
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    content : {
        type: String,
        required: true,
    }
})

const Article = mongoose.model('articles', schema);

module.exports = Article;

