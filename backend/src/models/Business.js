const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true },
    businessName: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    state: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    imagePath: { type: String }
  }, 
  { timestamps }
);

export default mongoose.model("Business", businessSchema);