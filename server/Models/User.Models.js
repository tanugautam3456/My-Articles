import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: "String",
        required: "true",
        unique: true,
    },
    email:{
        type:"String",
        required:"true",
        unique:"true"  ,
    },
    password: {
        type: "String",
        required: "true",
    },
    profilePicture:{
        type:String,
        default:"https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"
            
    }
},
    {
        timestamps: true,
    }
)

const User = mongoose.model('User', userSchema);
export default User;
