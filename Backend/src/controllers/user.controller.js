import UserModel from "../models/user.model.js"
import bcrypt from 'bcryptjs'
export async function register(req,res) {
    try {
        const {fullname,email,password} = req.body;
        const existingUser  = await UserModel.findOne({email}).lean();

        if(existingUser)
        {
         return res.status(400).json({
                message:"User already exist",
            })
        }

        const hashpassword = await bcrypt.hash(password,10); 

        const CreateUser = new UserModel({
            fullname,
            email,
            password:hashpassword
        })
       await CreateUser.save();

        res.status(201).json({
            message:"user created successfully",
            user:{
                _id:CreateUser._id,
                fullname:CreateUser.fullname,
                email:CreateUser.email,
            }
        })

    } catch (error) {
        console.log('Error'+error.message);
        res.status(500).json({
            message:"internal server error",
        })
    }
}

export async function login(req,res) {
    try {
        const {email,password} = req.body;
        const UserData = await UserModel.findOne({email});
        const isMatch = await bcrypt.compare(password,UserData.password);

        if(!UserData || !isMatch)
        {
           return res.status(400).json({message:"Invalid username or password"})
        }else{
            res.status(200).json({
                message:"login successful",
                data:{
                    _id:UserData._id,
                    fullname:UserData.fullname,
                    email:UserData.email
                }
            })
        }
    } catch (error) {
        console.log("Error"+ error.message);
        res.status(500).json({message:"Internal server error"});
    }
}