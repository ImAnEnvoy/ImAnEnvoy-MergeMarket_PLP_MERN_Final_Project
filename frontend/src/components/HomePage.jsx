import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Sidebar } from '../components/Sidebar';
import MarketRankIcon from '../assets/marketRankIcon.png';

import { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/mergeMarket");
        setBusinesses(res.data);
      } catch (error) {
        console.log("Error fetching businesses:", error);
      }
    };

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

          {businesses.length === 0 ? (
            <p className='business-grid-gray-text'>No business registered yet.</p>
          ) : (
        <div className="content-grid">
          {businesses.map((biz) => (
            <div key={biz._id} className="content-row">

              {biz.imagePath && (
                <div className='thumbnail'>
                  <img 
                    className='thumbnail-preview' 
                    src={`http://localhost:5000/uploads/${biz.imagePath}`} 
                    alt={biz.businessName} 
                  />
                </div>
              )}

              <div className="info">
                <p className='decription-label'>NAME:</p>
                <p className='title'>{biz.businessName}</p>

                <p className='decription-label'>SPECIALIZATION:</p>
                <p className='job-specialization'>{biz.category}</p>

                <p className='decription-label'>AVAILABILITY:</p>
                <p className='availability-level'>Monday - Friday</p>
              </div>

              <button className="contact-btn">Connect</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
