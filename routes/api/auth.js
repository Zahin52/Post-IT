const express=require("express")
const {Post_user}=require("../../controller/authController")
const route=express.Router()

//post user
route.post("/",Post_user)

module.exports=route
