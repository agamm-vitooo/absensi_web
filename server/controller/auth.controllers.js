// controller/auth.controllers.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { JWT_SECRET } from "../config.js";
import { successResponse, errorResponse } from "../utils/responseFormatter.js";

const prisma = new PrismaClient();

export const register = async(req, res) => {
    const { nama, email, password, role } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return errorResponse(res, "Email sudah terdaftar", null, 400);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { nama, email, password: hashedPassword, role },
        });

        return successResponse(res, "Pengguna berhasil didaftarkan", {
            id: user.id,
            nama: user.nama,
            email: user.email,
            role: user.role,
        });
    } catch (error) {
        return errorResponse(res, "Gagal mendaftarkan pengguna", error, 500);
    }
};

export const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return errorResponse(res, "Email atau kata sandi salah", null, 400);
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return errorResponse(res, "Email atau kata sandi salah", null, 400);
        }

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role },
            JWT_SECRET, { expiresIn: "1h" }
        );

        return successResponse(res, "Berhasil login", { token });
    } catch (error) {
        return errorResponse(res, "Gagal login", error, 500);
    }
};

// POST /api/logout
export const logout = async(req, res) => {
    const token = req.token;

    try {
        // Decode token untuk ambil expired-nya
        const decoded = jwt.decode(token);

        if (!decoded || !decoded.exp) {
            return errorResponse(res, "Token tidak valid", null, 400);
        }

        // Konversi exp dari detik ke milidetik
        const expiredAt = new Date(decoded.exp * 1000);

        await prisma.blacklistedToken.create({
            data: {
                token,
                expiredAt,
            },
        });

        return successResponse(res, "Berhasil logout", null);
    } catch (error) {
        return errorResponse(res, "Gagal logout", error, 500);
    }
};

export const getProfile = async(req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { id: true, nama: true, email: true, role: true },
        });

        return successResponse(res, "Profil berhasil diambil", user);
    } catch (error) {
        return errorResponse(res, "Gagal mengambil profil", error, 500);
    }
};