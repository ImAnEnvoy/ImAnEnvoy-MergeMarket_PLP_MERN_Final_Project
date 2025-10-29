
import MarketRankIcon from '../assets/market-rank-icon.png'

export function ContentGrid(){
  return(
    <>
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
      </div>
    </>
  );
}