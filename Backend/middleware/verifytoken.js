import jwt from "jsonwebtoken";
export const verifytoken=(req,res,next)=>{
    const token=req.cookies.token;
    try{
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized"}); 
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success:false,message:"Invalid token"});
        }
        req.userId=decoded.userId;
        next();
    

    }catch(error){
        console.log(error);
    return res.status(401).json({success:false,message:"Unauthorized"});
    }
}