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

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

// static uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => res.send('MergeMarket API is running...'));
app.use('/api/mergeMarket', businessRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API is on http://localhost:${PORT}`));
