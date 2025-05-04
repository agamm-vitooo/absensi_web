// router/user.router.js
import express from "express";
import {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from "../controller/user.controllers.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/authorizeRole.js"; // Import middleware RBAC

const router = express.Router();

// Routes untuk user dengan RBAC
router.get("/", authenticate, checkRole("ADMIN"), getUsers); // Hanya admin yang bisa melihat semua user
router.get("/:id", authenticate, getUserById); // User bisa melihat profile mereka sendiri
router.put("/:id", authenticate, checkRole("ADMIN"), updateUser); // Hanya ADMIN yang bisa update user
router.delete("/:id", authenticate, checkRole("ADMIN"), deleteUser); // Hanya admin yang bisa menghapus user

export default router;