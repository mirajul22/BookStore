import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    fullname:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})

const UserModel = mongoose.model('user',UserSchema);

export default UserModel