const Post= require("../models/postmodel")
// const mongoose =require("mongoose")

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
    
    console.log(req.body)
    const post =new Post(req.body)
    console.log(post);

    post.save()
        .then(result=>{
            res.json(result)
            console.log(result);
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