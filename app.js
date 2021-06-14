const express = require("express")
const mongoose = require("mongoose")
const postroute=require("./routes/api/postRoutes")
const userroute=require("./routes/api/userRoutes")
const auth=require("./routes/api/auth")
const config= require("config")
const path=require("path")

app=express()
app.use(express.json())

//db connection 
const dbURL=config.get('dbURL')

mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((res)=>{
            //console.log(res)
            console.log("connected db")
            
        }).catch(err=>{
            console.log(err)
        })
console.log("connect");
const port= process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

// app.get("/",(req,res)=>{
//     res.redirect("/post")
// })

app.use("/user",userroute)
app.use("/auth",auth)
app.use("/post",postroute)



//post build scripts 
if (process.env.NODE_ENV === "production"){
    //use static folder
    app.use(express.static("client/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

