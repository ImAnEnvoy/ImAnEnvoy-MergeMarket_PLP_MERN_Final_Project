import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import businessRouter from './routes/mergeMarket.js';

dotenv.config();
const app = express();

// Connect to DB (non-fatal)
connectDB();

// Allow multiple dev origins (comma-separated in .env) and default to common Vite port
const allowedOrigins = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173').split(',').map(s => s.trim());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// static uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Serve uploaded files from backend/uploads (multer writes to backend/uploads)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (req, res) => res.send('MergeMarket API is running...'));
app.use('/api/mergeMarket', businessRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API is on http://localhost:${PORT}`));
