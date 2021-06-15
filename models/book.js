const db = require("mongoose");
const Schema = db.Schema;

const bookSchema = new Schema({
    name:{
        type:String
    },
    author:{
        type:String
    },
    category:{
        type:String
    },
    copies:{
        type:Number
    },
    availableCopies:{
        type:Number
    }
},{collection:'books'});

const book = db.model("book",bookSchema);

module.exports = book;