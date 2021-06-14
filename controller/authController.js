const mongoose=require("mongoose")
const userModel=require("../models/userModel")
const bcrypt=require("bcryptjs")
const config= require("config")
const jwt= require("jsonwebtoken")



//Post user data
// @access public
const Post_user=(req,res)=>{
    // console.log(req.body);
    const {email,pass}=req.body
    
    // validation
    if (!email || !pass){
        res.status(400).json({msg:"Invalid fields! please enter all fields!"})
    }

    //user check

    userModel.findOne({email})
            .then(user =>{
                //if exist
                if (!user) return res.status(400).json({msg:"Email don't exist"})

                //validate pass
                bcrypt.compare(pass,user.pass)
                      .then(isMatch=>{
                        if (!isMatch) return res.status(400).json({"msg": " Invalid password "})
                        jwt.sign(
                            {id:user.id},
                            config.get("jwtSecret"),
                            {expiresIn: 3600},
                            (err,token)=>{

                                //if err found
                                if(err) throw err

                                //response
                                res.json({
                                    token,
                                    user: {
                                    
                                        name:user.name,
                                        email:user.email
                                    
                                }
                                })

                            }
                        )

                      })
            })


    

}

module.exports={
    Post_user
}