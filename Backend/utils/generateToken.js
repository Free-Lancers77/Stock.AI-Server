import jwt from "jsonwebtoken";

export const generateToken=(res,userId)=>{

    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"70d"
    })
    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",//for security
        maxAge: 7*24*60*60*1000//7 days
    })
    return token;
}

//Summary:
//This function generates a JWT containing the user's ID and stores it in an HTTP-only, secure cookie on the client's browser. The cookie is set to expire in 7 days, while the token itself lasts for 70 days. The secure flag ensures that the cookie is only sent over HTTPS in production environments, and the sameSite: "strict" flag adds protection against CSRF attacks.






