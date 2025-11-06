import { Link } from 'react-router';
import homeIcon from '../assets/home.svg'

export function Nav(){
  return(
    <>
      <nav className="first-level-nav">
          <div className="nav-links">
            <img src={homeIcon} alt="Menu" className="hamburger-menu" id="menuToggle" />
            <div className="nav-menu"><Link to='/'>Home</Link></div>
            <div className="nav-menu"><Link to='/BusinessForm'>Create Shop</Link></div>
            <div className="nav-menu">Contact Us</div>
          </div>
        </nav>
    </>
  );
}