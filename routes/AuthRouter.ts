import {Router} from "express";
const router = Router();
import { register , login, sendOTP } from "../controllers/AuthController";

import { validateRegisterInput, validateLoginInput, } from "../middleware/ValidationMiddleWare";

router.post("/register", validateRegisterInput, register);
router.post("/login",  validateLoginInput,login);
router.get("/send-otp", sendOTP)
export default router