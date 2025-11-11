const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  userId: { type: String, index: true },
  businessName: { type: String, required: true },
  category: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  imagePath: { type: String }
}, {timestamps});

export default mongoose.model("Business", businessSchema);