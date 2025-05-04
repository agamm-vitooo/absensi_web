// utils/responseFormatter.js
export const successResponse = (res, message, data) => {
    res.status(200).json({
        success: true,
        message: message,
        data: data,
        error: null,
    });
};

export const errorResponse = (res, message, error = null, statusCode = 400) => {
    res.status(statusCode).json({
        success: false,
        message: message,
        data: null,
        error: error,
    });
};