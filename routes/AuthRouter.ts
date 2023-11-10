import {Router} from "express";
const router = Router();
import { register , login, sendOtp, verifyOtp } from "../controllers/AuthController";

import { validateRegisterInput, validateLoginInput, validateSendOtp, } from "../middleware/ValidationMiddleWare";

router.post("/register", validateRegisterInput, register);
router.post("/login",  validateLoginInput,login);
router.post("/send-otp",validateSendOtp, sendOtp);
router.post("/verify-otp", verifyOtp)
export default router