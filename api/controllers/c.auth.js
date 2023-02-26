const {UserModel}=require("../Models/User")
const dotenv=require("dotenv")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


const register = async(req,res,next)=>{
    const {username,email,password}=req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(err){
                console.log("Something went wrong")
            }else{
                const newUser= new UserModel({username,email,password:hash})
                await newUser.save()
                res.status(200).send("user has been created")
            }
        })
        
    } catch (err) {
        next(err)
    }
}

const login = async(req,res,next)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password, function(err, result) {
                if(result){
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"Logged in","token":token})
                }else{
                    res.send({"msg":"Wrong crendential"})
                }
            });
        }else{
            res.send({"msg":"Wrong crendential"})
        }
    } catch (err) {
        next(err)
    }
}

module.exports={
    register,login
}