const express=require("express")
const {HotelModel}=require("../Models/Hotel")
const { createError } = require("../utils/error")
const {getHotels,getHotel,deleteHotel,updateHotel,createHotel}=require("../controllers/c.hotel")
const hotelsRouter = express.Router()

// hotelsRouter.use(express.json())

//create
hotelsRouter.post("/create", createHotel);

//update
hotelsRouter.put("/update/:id", updateHotel)

//delete
hotelsRouter.delete("/delete/:id", deleteHotel)

//get
hotelsRouter.get("/get/:id", getHotel)

//get all
hotelsRouter.get("/", getHotels)

module.exports={
    hotelsRouter
}