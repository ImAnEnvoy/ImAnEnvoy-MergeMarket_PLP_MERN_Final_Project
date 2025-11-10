import { Link } from 'react-router';
import HamburgerIcon from '../assets/hamburger-menu.svg'

export function Nav(){
  return(
    <>
      <nav className="first-level-nav">
          <div className="nav-links">
            <img src={HamburgerIcon} alt="Menu" className="hamburger-menu" id="menuToggle" />
            <div className="nav-menu"><Link to='/' className='link-menu'>Home</Link></div>
            <div className="nav-menu"><Link to='/BusinessForm' className='link-menu'>Create Shop</Link></div>
            {/* <div className="nav-menu" >Contact Us</div> */}
          </div>
        </nav>
    </>
  );
}