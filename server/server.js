import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './router/auth.router.js';
import userRoutes from './router/user.router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Konfigurasi CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Tangani preflight OPTIONS request
app.options('*', cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

// Route dasar
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Routing API
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});