const mongoose=require("mongoose")
const userModel=require("../models/userModel")

//Get user data
// @access public
const Get_user=(req,res)=>{
    //console.log(req);
    userModel.find()
            .then(result=>{
                res.json(result)
            })
            .catch(err=>{
                console.log(err)
            })
}


//Post user data
// @access public
const Post_user=(req,res)=>{
    console.log(req.body);
    const User= new userModel(req.body)

    User.save()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            console.log(err);
        })

}

module.exports={
    Get_user,
    Post_user
}