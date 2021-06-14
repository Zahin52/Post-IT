const mongoose=require("mongoose")
const userModel=require("../models/userModel")
const bcrypt=require("bcryptjs")
const config= require("config")
const jwt= require("jsonwebtoken")

//Get user data
// @access public
const Get_user=(req,res)=>{
    //console.log(req);
    userModel.find(req.body)
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
    // console.log(req.body);
    const {name,email,pass}=req.body
    
    // validation
    if (!name || !email || !pass){
        res.status(400).json({msg:"Invalid fields! please enter all fields!"})
    }

    //user check

    userModel.findOne({email})
            .then(user =>{
                //if exist
                if (user) return res.status(400).json({msg:"Email already exist"})

                //new user 
                const User= new userModel({
                    name,
                    email,
                    pass
                })

                // create salt & hash

                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(User.pass,salt,(err,hash)=>{
                        User.pass=hash

                        //save new user

                        User.save()
                        .then(result=>{

                            //jwt 
                            jwt.sign(
                                {id:result.id},
                                config.get("jwtSecret"),
                                {expiresIn: 3600},
                                (err,token)=>{

                                    //if err found
                                    if(err) throw err

                                    //response
                                    res.json({
                                        token,
                                        user: {
                                        
                                            name:result.name,
                                            email:result.email
                                        
                                    }
                                    })

                                }
                            )
                            
                        })
                        .catch(err=>{
                            console.log(err);
                        })  

                    })
                })

            })


    

}

module.exports={
    Get_user,
    Post_user
}