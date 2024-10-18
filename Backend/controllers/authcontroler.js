
import { User } from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/generateToken.js";
import { sendVerificationToken,sendWelcomeEmail ,sendPasswordResetEmail,sendResetSucessEmail} from "../mailtrap/email.js";
import { ExpressValidator } from "express-validator";


export const signup=async(req,res)=>{
    //step number 1 retreive the data from user
    const {email,password,name}=req.body;
   try{
        //step number 2 validation
        if(!email || !password || !name){
            return res.status(400).json({message:"All fields are required"});
        }
        //step number 3 check if user already exists
        const finduser=await User.findOne({email});
        if(finduser){
          return res.status(400).json({success:false,message:"User already exists"});
        }
        //step 4 hash the pass
        const hashedpassword=await bcrypt.hash(password,10);
        //step 5 create user
       // const user=await User.create({email,hashedpassword,name});
        //res.status(201).json({user});
        //generate the verfication code
        const verficationToken=Math.floor(100000 + Math.random() * 900000).toString();
        //this is a function that generate the verfication code
        //create  user
        const user=await User.create({
            email,
            password:hashedpassword,
            name,
            verficationToken,
            verficationTocenExpiresAt:new Date(Date.now() + 24 * 60 * 60 * 1000),//24 hours

            
        });
    

        await user.save();
        //this section for jwt authentication after saving it in the database
        generateToken(res,user._id);
       await sendVerificationToken(user.email,verficationToken);
        return res.status(201).json({
            success:true,
            message:"User created successfully",
            user:{
                ...user._doc,
                password:undefined
            }




        });

   }
   catch(error){
      return res.status(400).json({message:error.message});

   }
};

export const verifyEmaile = async (req, res) => {
    const { code } = req.body;
    try {
        const targeted_user=await User.findOne({
            verficationToken:code,
            verficationTocenExpiresAt:{
                $gt:Date.now()
            }
            
        });
        console.log(targeted_user);
        if(!targeted_user){
            return res.status(400).json({success:false,message:"Invalid verification code"});
        }
        targeted_user.isVerified=true;
        targeted_user.verficationToken=undefined;
        targeted_user.verficationTocenExpiresAt=undefined;
        await targeted_user.save();
        await sendWelcomeEmail(targeted_user.email,targeted_user.name);
        return res.status(200).json({success:true,message:"Email verified successfully"});
      
        
    }
    catch(Error){
        console.log(Error);
        return res.status(400).json({success:false,message:"Error"});
    }
}
export const login=async(req,res)=>{
    //step 1 get the data
   const {email,password}=req.body;
   try{
    if(!email ||!password){
        return res.status(400).json({success:false,message:"All fields are required"});
    }
    //step 2 find the user
    const user=await User.findOne({email});
    if(!user){
        return res.status(404).json({success:false,message:"User not found"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({success:false,message:"Invalid credentials"});
    }   

    //step 3 generate the token
     const token=generateToken(res,user._id);
    //step 4 update the last login
    user.LastLogin=Date.now();
    await user.save();
    return res.status(200).json({
        success:true,
        message:"User logged in successfully",
        token,
        user:{
            ...user._doc,
            password:undefined
        }
    });

   }catch(error){
    return res.status(400).json({success:false,message:error.message});
   }

}
export const forgetPassword=async(req,res)=>{
    const {email}=req.body;
    try{
        if(!email){
            return res.status(400).json({success:false,message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
    
        }
        const resetToken=crypto.randomBytes(32).toString("hex");
        const resetTokenExpiresAt=Date.now()+1*60*60*1000;//1 hour
        user.resetPasstoken=resetToken;
        user.resetPassExpiresAt=resetTokenExpiresAt;
       await user.save();
       await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`);
       return res.status(200).json({
        success: true,
        message: "Reset password link sent to your email",
        resetToken // Return the plain reset token here
    });

    }
    catch(error){
        return res.status(400).json({success:false,message:error.message});
    }
}
export const resetpassword=async(req,res)=>{
    try{
        const {token}=req.params;
        const {password}=req.body;
        const user=await User.findOne({
            resetPasstoken:token,
            resetPassExpiresAt:{
                $gt:Date.now()
            }
        })
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired token"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
        user.password=hashedpassword;
        user.resetPasstoken=undefined;
        user.resetPassExpiresAt=undefined;
        await user.save();
        await sendResetSucessEmail(user.email);
        return res.status(200).json({success:true,message:"Password reset successfully"});
        
    }catch(Error){  
        console.log(Error);
        return res.status(400).json({success:false,message:"Error"});
    }
}
export const checkauth=async(req,res)=>{
    try{
        const user=await User.findById(req.userId);
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
        }
        return res.status(200).json({success:true,user});
    }catch(error){
        return res.status(400).json({success:false,message:error.message});
    }
}
