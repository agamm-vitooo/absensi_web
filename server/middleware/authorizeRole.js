// middleware/roleMiddleware.js
import { errorResponse } from "../utils/responseFormatter.js";

export function checkRole(requiredRole = "ADMIN") {
    return (req, res, next) => {
        let userRole = null;

        if (req.user && req.user.role) {
            userRole = req.user.role.toUpperCase(); // Ubah jadi huruf besar untuk konsistensi
        }

        if (userRole !== requiredRole) {
            return errorResponse(
                res,
                `Akses ditolak. Hanya pengguna dengan peran '${requiredRole}' yang diperbolehkan`,
                null,
                403
            );
        }

        next();
    };
}