import React, { useState } from "react";
import axios from "axios";
import "./BusinessForm.css";

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Sidebar } from '../components/Sidebar';
import moneyShop from '../assets/moneyShop.png';

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

  // Handle text/select/image inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Prepare form data for file upload
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Send to backend API (adjust the URL as needed)
      // const response = await axios.post("/api/businesses", data, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      const response = await axios.post("http://localhost:5000/api/businesses", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });


      alert("Business submitted successfully!");
      console.log("Server Response:", response.data);

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
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
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
        <img src={moneyShop} />
        <div>Upload Your Business</div>
      </div>

      <div className="form-content-grid">
        <form className="business-form" onSubmit={handleSubmit}>
          {/* <h2>Upload Business</h2> */}

          <div className="form-group">
            <div className="form-group">
              <label htmlFor="image">Add Image</label>
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

            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Enter business name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default BusinessForm;
