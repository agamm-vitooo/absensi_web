import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";
import { errorResponse } from "../utils/responseFormatter.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 🔒 Ubah jadi async!
export const authenticate = async(req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.startsWith('Bearer ') ?
        authHeader.replace('Bearer ', '') :
        null;

    req.token = token;

    if (!token) {
        return errorResponse(res, "Token tidak ditemukan. Akses ditolak", null, 401);
    }

    try {
        // 🔒 Cek token blacklist
        const isBlacklisted = await prisma.blacklistedToken.findUnique({ where: { token } });
        if (isBlacklisted) {
            return errorResponse(res, "Token tidak berlaku, silakan login ulang", null, 401);
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        req.token = token; // simpan token untuk keperluan logout
        next();
    } catch (error) {
        return errorResponse(res, "Token tidak valid", error, 401);
    }
};