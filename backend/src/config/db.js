import mongoose from 'mongoose';

/**
 * Establish a mongoose connection using the environment variable
 * `MONGODB_URI`. Falls back to `MONGODB_URL` if present for backwards
 * compatibility. This function logs errors but does not exit the process
 * so the server can start and handle the error more gracefully.
 */
export async function connectDB() {
  const uri = process.env.MONGODB_URI || process.env.MONGODB_URL;
  if (!uri) {
    console.error('MongoDB connection string not set. Please set MONGODB_URI in .env');
    return;
  }

  try {
    // Optional: tune mongoose settings here
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message || error);
  }
}

export default connectDB;