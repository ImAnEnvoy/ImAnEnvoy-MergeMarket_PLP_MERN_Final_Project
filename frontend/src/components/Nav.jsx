import homeIcon from '../assets/home.svg'

export function Nav(){
  return(
    <>
      <nav className="first-level-nav">
          <div className="nav-links">
            <img src={homeIcon} alt="Menu" className="hamburger-menu" id="menuToggle" />
            <div className="nav-menu">Home</div>
            <div className="nav-menu">View</div>
            <div className="nav-menu">Help</div>
          </div>
        </nav>
    </>
  );
}