const express=require("express")
const {Get_user,Post_user}=require("../../controller/authController")
const route=express.Router()

//get user
route.get("/",Get_user)

//post user
route.post("/",Post_user)

module.exports=route
