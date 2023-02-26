const express=require("express")
const {getUsers,getUser,deleteUser,updateUser}=require("../controllers/c.user")
const usersRouter = express.Router()
const{authenticate,verifyUser}=require("../utils/verifyToken")

usersRouter.get("/checkauthentication", authenticate, (req,res,next)=>{
    res.send("You are logedin")
})

usersRouter.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("You are logedin and you can delete your id")
})


//update
usersRouter.put("/update/:id", updateUser)

//delete
usersRouter.delete("/delete/:id", deleteUser)

//get
usersRouter.get("/get/:id", getUser)

//get all
usersRouter.get("/", getUsers)

module.exports={
    usersRouter
}


module.exports={
    usersRouter
}