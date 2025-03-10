import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
	resendVerificationCode,
	contactUs
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/resend-otp", resendVerificationCode);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.post("/contact-us", contactUs);

export default router;
