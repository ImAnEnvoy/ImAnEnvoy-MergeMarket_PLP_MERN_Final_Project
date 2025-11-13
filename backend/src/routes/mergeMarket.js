const express = require('express');
const MergeMarket = require('../models/Business');
const router = express.Router();

// GET /api/mergeMarket?userId - READ
router.get('/', async (req, res) => {
  const { userId } = req.body;
  const filter = userId ? { userId } : {}
  const market = await MergeMarket.find(filter).sort({ createdAt: -1 });
  res.json(market);
});

// POST - CREATE
router.get('/', async (req, res) => {
  const { businessName, category, state, city, imagePath } = req.body;
  if(!businessName) return res.status(400).json({ message: "Business name required" });

  const business = await MergeMarket.create({ businessName, category, state, city, imagePath });
  res.status(201).json(business);
});

// PUT - /api/mergeMarket/:id - UPDATE
router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const { businessName, category, state, city, imagePath } = req.body;

  const updateBusiness = await MergeMarket.findByIdAndUpdate(
    id,
    { $set: { businessName, category, state, city, imagePath } },
    { new: true }
  );

  if(!updateBusiness) return res.status(404).json({ message: "Record not found." });
  res.json(updateBusiness);
});

// DELETE
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await MergeMarket.deleteOne({ _id: id });
  if(result.deleteOne == 0) return res.status(404).json({ message: "No record found." });
  res.json({ ok: true });
});

module.exports = router;