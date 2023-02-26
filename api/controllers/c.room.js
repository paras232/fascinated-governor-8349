const { HotelModel } = require("../Models/Hotel")
const {RoomModel}=require("../Models/Room")
const {createError}=require("../utils/error")

const createRoom = async(req,res,next)=>{

    const HotelID = req.params.Hotelid
    const newRoom = new RoomModel(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await HotelModel.findByIdAndUpdate(HotelID, {$push : { rooms: savedRoom._id },
            })
        }catch(err){
            next(err)
        }
        res.send(savedRoom)
    }catch(err){
        next(err)
    }
}

const updateRoom=async(req,res,next)=>{
    try {
        const updateRoom= await RoomModel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateRoom)
    }catch (err) {
        next(err)
    }
}

const deleteRoom=async(req,res,next)=>{
    const HotelID=req.body.Hotelid
    try {
        await RoomModel.findByIdAndDelete(req.params.id)
        try{
            await RoomModel.findByIdAndUpdate(HotelID, {
                $pull: {rooms: req.params.id}
            })
        }catch(err){
            next(err)
        }
        res.status(200).json("Room is Deleted")
    } catch (err) {
        next(err)
    }
}

const getRoom=async(req,res,next)=>{
    try {
        const room = await RoomModel.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}
const getRooms=async(req,res,next)=>{
    try {
        const Rooms = await RoomModel.find()
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
}
module.exports={
    getRooms,getRoom,deleteRoom,updateRoom,createRoom
}