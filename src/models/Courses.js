const mongoose = require("mongoose");

const Course = mongoose.Schema({
    image:String,
    title:String,
    linkText:String,
    link:String
});

module.exports= mongoose.model("courses",Course);