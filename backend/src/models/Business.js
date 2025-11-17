import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  category: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  imagePath: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Business", businessSchema);
