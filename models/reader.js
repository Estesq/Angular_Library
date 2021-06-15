const db = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = db.Schema;
var readerSchema = new Schema({
    name:{
        type:String
    },
    phone:{
        type:Number,
        unique:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},{collection:"readers"});
readerSchema.plugin(uniqueValidator);
const reader = db.model("reader",readerSchema);

module.exports = reader;