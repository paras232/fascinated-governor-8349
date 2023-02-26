const jwt=require("jsonwebtoken")
const {createError}=require("./error")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization

    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userID
                next()
                
            }else{
                res.send({"msg":"Please login"})
            }
        })
    }else{
        return next(createError(401, "you are not Authenticated"))
    }
}

const verifyUser= (req,res,next)=>{
    authenticate(req,res,next , ()=>{
        if(req.user.id === req.params.id){
            next()
        }else{
            if(err) return next(createError(403,"You are not Authorized"))
        }
    })
}

module.exports={
    authenticate,verifyUser
}