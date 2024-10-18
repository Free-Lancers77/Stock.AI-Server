import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplate.js";
import { Mailtrapclient, sender } from "./mailtrap.config.js";
 export const  sendVerificationToken=async(email,verificationToken)=>{
    const recep=[{email}];
    try{

        const response= await Mailtrapclient.send({
            from:sender,
            to:recep,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verfication"

            
        })
        console.log("email send succ",response);
    }catch(error){
        console.log(error);
        throw new Error(`error cosending verfication emaile to ${email}`)
    }
}
export const sendWelcomeEmail=async(email,name)=>{
    const recep=[{email}];
    try   {
       const resp= await Mailtrapclient.send({
            from: sender,
    to: recep,
    template_uuid: "6dcf5643-0038-4d9d-ba82-4a20ef8629e6",
    template_variables: {
      "company_info_name": "Stack.ai Company",
      "name": name
    }
        })
        console.log("Welcome emaile send succ",resp);

    }
    catch(Error){
        console.log(Error);
        return res.status(400).json({success:false,message:"Error"});

    }
}
export const sendPasswordResetEmail=async(email,resetUrl)=>{
    const recep=[{email}];
    try{
        const response= await Mailtrapclient.send({
            from:sender,
            to:recep,
            subject:"Password Reset",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetUrl),
            category:"Password Reset"
        })
        console.log("email send succ",response);
    }catch(error){
        console.log(error);
        throw new Error(`error cosending verfication emaile to ${email}`)
    }
}
export const sendResetSucessEmail=async(email)=>{
    const recep=[{email}];
    try{
        const response= await Mailtrapclient.send({
            from:sender,
            to:recep,
            subject:"Password Reset",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset"
        })
        console.log("Password Reset email send succ",response);
    }catch(error){
        console.log(error);
        throw new Error(`error cosending verfication emaile to ${email}`)
    }
}