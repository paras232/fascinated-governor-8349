const express = require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const {authRouter}=require("./routes/auth")
const {usersRouter}=require("./routes/users")
const {hotelsRouter}=require("./routes/hotels")
const {roomsRouter}=require("./routes/rooms")

mongoose.set('strictQuery', false)
const app=express()
require('dotenv').config()



const connect = async ()=>{
    try{
        await mongoose.connect(process.env.mongoURL)
        console.log("Connected to DB")

    }catch(err){
        throw err
    }
};
//middleware

app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(8080, ()=>{
    connect()
    console.log("Server running on port 8080")
})