 import mongoose, { Mongoose, Schema } from "mongoose";
  const userSchema = new Schema({
    _id:{type:String, required:true},
    username :{type:String, required:true},
    email :{type:String, required:true}, 
    image :{type:String, required:true},
    role :{type:String, enum:['user', 'hotelowner'], default:'user' },
     recentSearch:{type:String , required:true}
  },{ timestamps:true})
  const User = mongoose.model("users", userSchema);
   export default User;