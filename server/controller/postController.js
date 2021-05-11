const Post= require("../models/postmodel")
const mongoose =require("mongoose")

//get post 
const getPost=(req,res)=>{
    Post.find()
        .sort({createdAt:-1})
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
}

const postPost=(req,res)=>{
    // const post= new Post({
    //     title:"Added new one",
    //     body:"Some thing you can change using trial and error"
    // })
    console.log(req.body)
    const post =new Post(req.body)

    post.save()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err)
        })
}
const detailsPost=(req,res)=>{
    Post.findById(req.params.id)
        .then(result=>{
            console.log(result);
            res.json(result)
        })
        .catch(err=>{
            console.log(err);
        })
}


//export
module.exports={
    getPost,
    postPost,
    detailsPost
}