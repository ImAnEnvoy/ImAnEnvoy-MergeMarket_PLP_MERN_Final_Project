import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import Business from '../models/Business.js';

const router = express.Router();

// multer setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, path.join(__dirname, '..', '..', 'uploads')),
	filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Create business
router.post('/businesses', upload.single('image'), async (req, res) => {
	try {
		const { businessName, category, state, city } = req.body;
		const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
		const newBusiness = new Business({ businessName, category, state, city, imagePath });
		await newBusiness.save();
		res.json({ message: 'Business registered successfully', business: newBusiness });
	} catch (err) {
		console.error('Error saving business:', err);
		res.status(500).json({ error: 'Server error while saving business' });
	}
});

// Get businesses
router.get('/businesses', async (req, res) => {
	try {
		const businesses = await Business.find().sort({ createdAt: -1 });
		res.json(businesses);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch businesses' });
	}
});

export default router;
