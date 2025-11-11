
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Sidebar } from '../components/Sidebar';
import MarketRankIcon from '../assets/marketRankIcon.png'
import Thumbnail from '../assets/thumbnail-9.webp'

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

        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>
        
        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>
        
        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>               

        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>

          <button type="submit" className="contact-btn">Contact</button>
        </div>

        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>
        
        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>
        
        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>               

        <div className="content-row">
          <div className='thumbnail'>
            <img className='thumbnail-preview' src={Thumbnail} alt="" />
          </div>
          <div className="info">
            <p className='decription-label'>NAME:</p>
            <p className='title'>ABC Mechanical Enterprise</p>
            <p className='decription-label'>SPECIALIZATION:</p>
            <p className='job-specialization'>Electrical & Electronic</p>
            <p className='decription-label'>AVAILABILITY:</p>
            <p className='availability-level'>Monday - Friday</p>
          </div>
          <button type="submit" className="contact-btn">Contact</button>
        </div>
               
      </div>
    </>
  );
}