// router/auth.router.js
import express from "express";
import { register, login } from "../controller/auth.controllers.js"; // pastikan nama folder dan file sesuai

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;