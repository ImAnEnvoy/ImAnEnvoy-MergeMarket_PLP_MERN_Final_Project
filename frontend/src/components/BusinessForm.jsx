import React, { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";

import moneyShop from "../assets/moneyShop.png";
import "./BusinessForm.css";

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    state: "",
    city: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Cleanup preview object to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await axios.post(
        "http://localhost:5000/api/mergeMarket/businesses",
        data // no headers needed, axios handles FormData content-type
      );

      setMessage("Business uploaded successfully!");
      console.log("Server Response:", res.data);

      // Reset form
      setFormData({
        businessName: "",
        category: "",
        state: "",
        city: "",
        image: null,
      });
      setPreview(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Sidebar />

      <div className="content-header">
        <img src={moneyShop} alt="Shop" />
        <div>Upload Your Business</div>
      </div>

      <div className="form-content-grid">
        <form className="business-form" onSubmit={handleSubmit}>
          
          {message && (
            <div className={`alert ${message.startsWith("❌") ? "error" : "success"}`}>
              {message}
            </div>
          )}

          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="image">Business Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
              </div>
            )}
          </div>

          {/* Business Name */}
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter business name"
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Engineering">Engineering</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Mechanics">Mechanics</option>
              <option value="Carpenter">Carpenter</option>
            </select>
          </div>

          {/* State */}
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              required
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default BusinessForm;
