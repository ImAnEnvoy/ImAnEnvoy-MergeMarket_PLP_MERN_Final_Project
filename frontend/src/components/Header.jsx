import mergeMarketLogo from "../assets/merge_market_transparent.png";
import searchIcon from "../assets/search.svg";
import homeIcon from "../assets/home.svg";
import notificationsIcon from "../assets/notifications.svg";
import settingsIcon from "../assets/setting-1.svg";
import profilePic from "../assets/profile-pic.png";

// Header Component
export function Header(){
  return(
    <>
      <header>
        <div className="left-section">
          <img className="mergeMarketLogo" src={mergeMarketLogo} alt="Merge Market Logo" />
        </div>

        <div className="middle-section">
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
          <input className="search-bar" type="text" placeholder="Search for an artisan here..." />
          <button className="search-button">Search</button>
        </div>

        <div className="right-section">
          <div className="header-link">
            <img src={homeIcon} alt="Home" />
          </div>
          <div className="header-link">
            <img src={notificationsIcon} alt="Notifications" />
          </div>
          <div className="header-link">
            <img src={settingsIcon} alt="Settings" />
          </div>
          <div className="header-link">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </header>
    </>
  );
}