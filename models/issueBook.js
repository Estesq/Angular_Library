const db = require("mongoose");
const Schema = db.Schema;

const issuebookSchema = new Schema({
    bookId:{
        type:String
    },
    phone:{
        type:Number
    }
},{collection:'issuedbooks'});

const issuebook = db.model("issuedbook",issuebookSchema);

module.exports = issuebook;