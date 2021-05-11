const mongoose= require("mongoose")
const Schema = mongoose.Schema

const postSchema= new Schema({
    "title":{
        type: String,
        require: true
    },
    "body":{
        type : String,
        require: true
    }
},{timestamps:true})

const post = mongoose.model("post",postSchema)

module.exports=post