const express=require("express")
const auth=require("../../middleware/auth")
const {getPost,postPost,detailsPost} =require("../../controller/postController")



const route=express.Router()
// //get 
// route.get("/",auth,getPost)

// //post
// route.post("/",auth,postPost)

// //details

// route.get("/:id",detailsPost)

//get 
route.get("/",getPost)

//post
//@private
route.post("/",auth,postPost)

//details

route.get("/:id",detailsPost)



module.exports=route