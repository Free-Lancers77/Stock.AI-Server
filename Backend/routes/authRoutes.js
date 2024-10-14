
import { login,  signup, verifyEmaile ,forgetPassword,resetpassword,checkauth} from "../controllers/authcontroler.js";
import express from "express";
import { verifytoken } from "../middleware/verifytoken.js";
const router = express.Router();
//this will verify the token when the user is logged in and refresh the page

router.get("/check_auth",verifytoken,checkauth);
router.post("/signup", signup);
  
router.post("/verify_emaile",verifyEmaile);
router.post("/login", login);
router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.post("/forget_password",forgetPassword);
router.post("/reset_password/:token", resetpassword);
  
export default router;