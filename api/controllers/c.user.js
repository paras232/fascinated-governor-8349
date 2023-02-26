const { UserModel } = require("../Models/User")

const updateUser=async(req,res,next)=>{
    try {
        const updateUser= await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateUser)
    }catch (err) {
        next(err)
    }
}

const deleteUser=async(req,res,next)=>{
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("User is Deleted")
    } catch (err) {
        next(err)
    }
}

const getUser=async(req,res,next)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
const getUsers=async(req,res,next)=>{
    try {
        const Users = await UserModel.find()
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
module.exports={
    getUsers,getUser,deleteUser,updateUser
}