import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Sidebar } from '../components/Sidebar';

import MarketRankIcon from '../assets/marketRankIcon.png';

export function HomePage() {

  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch businesses from backend
  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const response = await axios.get("http://localhost:5000/api/mergeMarket");
        setBusinesses(response.data.data); // data from backend
      } catch (err) {
        console.error("Error fetching businesses:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBusinesses();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <Sidebar />

      <div className="content-header">
        <img src={MarketRankIcon} alt="Market Rank Icon" />
        <div>Market Board Leaders</div>
      </div>

      <div className="content-grid">

        {/* Loading */}
        {loading && (
          <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>
        )}

        {/* No businesses */}
        {!loading && businesses.length === 0 && (
          <p style={{ textAlign: "center", padding: "20px" }}>No businesses available yet</p>
        )}

        {/* Display Businesses */}
        {businesses.map((biz) => (
          <div className="content-row" key={biz._id}>

            <div className='thumbnail'>
              <img
                className='thumbnail-preview'
                src={`http://localhost:5000/uploads/${biz.image}`}
                alt={biz.businessName}
              />
            </div>

            <div className="info">
              <p className='decription-label'>NAME:</p>
              <p className='title'>{biz.businessName}</p>

              <p className='decription-label'>SPECIALIZATION:</p>
              <p className='job-specialization'>{biz.category}</p>

              <p className='decription-label'>LOCATION:</p>
              <p className='availability-level'>
                {biz.city}, {biz.state}
              </p>
            </div>

            <button type="button" className="contact-btn">Connect</button>
          </div>
        ))}

      </div>
    </>
  );
}
