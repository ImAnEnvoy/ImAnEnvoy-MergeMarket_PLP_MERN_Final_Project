
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Sidebar } from '../components/Sidebar';
import MarketRankIcon from '../assets/marketRankIcon.png'

export function HomePage(){
  return(
    <>
      <Header />
      <Nav />
      <Sidebar />
      <div className="content-header">
        <img src={MarketRankIcon} alt="Market Rank Icon" />
        <div>Market Board Leaders</div>
      </div>

      <div className="content-grid">
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
        <div className="content-row"></div>
      </div>
    </>
  );
}