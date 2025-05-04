// router/auth.router.js
import express from "express";
import { register, login, logout, getProfile } from "../controller/auth.controllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticate, logout);
router.get("/profile", authenticate, getProfile);

export default router;