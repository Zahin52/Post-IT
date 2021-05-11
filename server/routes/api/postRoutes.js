const express=require("express")
const {getPost,postPost,detailsPost} =require("../../controller/postController")

const route=express.Router()
//get 
route.get("/",getPost)

//post
route.post("/",postPost)

//details

route.get("/:id",detailsPost)

module.exports=route