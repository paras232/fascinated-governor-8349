const express=require("express")
const {getRooms,getRoom,deleteRoom,updateRoom,createRoom}=require("../controllers/c.room")
const roomsRouter = express.Router()

//create
roomsRouter.post("/create/:Hotelid", createRoom);

//update
roomsRouter.put("/update/:id", updateRoom)

//delete
roomsRouter.delete("/delete/:id/:Hotelid", deleteRoom)

//get
roomsRouter.get("/get/:id", getRoom)

//get all
roomsRouter.get("/", getRooms)


module.exports={
    roomsRouter
}