import express from "express";
import multer from "multer";
import path from "path";
import Business from "../models/Business.js";

const router = express.Router();

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// ✔️ THIS MUST BE POST "/"
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { businessName, category, state, city } = req.body;

    const newBusiness = await Business.create({
      businessName,
      category,
      state,
      city,
      image: req.file ? req.file.filename : null,
    });

    res.json({ success: true, business: newBusiness });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find().sort({ createdAt: -1 });
    res.json({ success: true, data: businesses });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
