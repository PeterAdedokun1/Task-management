import {Router} from "express";
const router = Router();
import { register , login } from "../controllers/AuthController";

import { validateRegisterInput, validateLoginInput } from "../middleware/ValidationMiddleWare";

router.post("/register", validateRegisterInput, register);
router.post("/login",  validateLoginInput,login);
export default router