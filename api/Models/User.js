const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:false
    }
},
{ timestamps: true}
);

const UserModel = mongoose.model("User",UserSchema)

module.exports={
    UserModel
}