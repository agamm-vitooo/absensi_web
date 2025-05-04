// controller/user.controllers.js
import { PrismaClient } from "@prisma/client";
import { successResponse, errorResponse } from "../utils/responseFormatter.js";

const prisma = new PrismaClient();

// Ambil semua pengguna
export const getUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();
        return successResponse(res, "Berhasil mengambil semua pengguna", users);
    } catch (error) {
        return errorResponse(res, "Gagal mengambil data pengguna", error, 500);
    }
};

// Ambil pengguna berdasarkan ID
export const getUserById = async(req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        if (!user) {
            return errorResponse(res, "Pengguna tidak ditemukan", null, 404);
        }
        return successResponse(res, "Berhasil mengambil data pengguna", user);
    } catch (error) {
        return errorResponse(res, "Gagal mengambil data pengguna", error, 500);
    }
};

// Perbarui data pengguna
export const updateUser = async(req, res) => {
    const { id } = req.params;
    const { nama, email, role } = req.body;

    if (!id || isNaN(id)) {
        return errorResponse(res, "ID pengguna tidak valid", null, 400);
    }

    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                nama,
                email,
                role: role.toUpperCase(),
            },
        });

        return successResponse(res, "Data pengguna berhasil diperbarui", updatedUser);
    } catch (error) {
        return errorResponse(res, "Gagal memperbarui data pengguna", error, 500);
    }
};

// Hapus pengguna
export const deleteUser = async(req, res) => {
    const { id } = req.params;

    try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        return successResponse(res, "Pengguna berhasil dihapus", null);
    } catch (error) {
        return errorResponse(res, "Gagal menghapus pengguna", error, 500);
    }
};