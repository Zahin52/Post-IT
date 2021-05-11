const express = require("express")
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const postroute=require("./routes/api/postRoutes")
const path=require("path")

app=express()



//db connection 
const dbURL="mongodb+srv://zahin:zahin1234@cluster0.tccbv.mongodb.net/MernStack?retryWrites=true&w=majority"

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
//middleware
app.use(bodyParser.json())

// app.get("/",(req,res)=>{
//     res.redirect("/post")
// })

app.use("/post",postroute)

//post build scripts 
if (process.env.NODE_ENV === "production"){
    //use static folder
    app.use(express.static("client/build"))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

