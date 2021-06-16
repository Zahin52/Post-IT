const express=require("express")
const {Post_user}=require("../../controller/userController")
const route=express.Router()

//get user
// route.get("/",Get_user)

//post user
route.post("/",Post_user)

module.exports=route
