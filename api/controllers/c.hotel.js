const { HotelModel } = require("../Models/Hotel")


const createHotel=async(req,res,next)=>{
    const newHotel = new HotelModel(req.body)
    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

const updateHotel=async(req,res,next)=>{
    try {
        const updateHotel= await HotelModel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateHotel)
    }catch (err) {
        next(err)
    }
}

const deleteHotel=async(req,res,next)=>{
    try {
        await HotelModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel is Deleted")
    } catch (err) {
        next(err)
    }
}

const getHotel=async(req,res,next)=>{
    try {
        const Hotel = await HotelModel.findById(req.params.id)
        res.status(200).json(Hotel)
    } catch (err) {
        next(err)
    }
}
const getHotels=async(req,res,next)=>{
    try {
        const Hotels = await HotelModel.find()
        res.status(200).json(Hotels)
    } catch (err) {
        next(err)
    }
}
module.exports={
    getHotels,getHotel,deleteHotel,updateHotel,createHotel
}