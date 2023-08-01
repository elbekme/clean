import React from 'react';
import './Footer.scss';
import FooterLogo from '../../assets/images/footer-logo (3).png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-info">
        <div className="info-1">
          <h1 className='h1-same'>Quality cleaning for your home</h1>
          <p className='p-same'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="info-2">
          <h1 className='h1-same'>Contact us</h1>
          <p className='p-same'>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p className='p-same'>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className="info-3">
          <h1 className='h1-same'>Hours</h1>
          <h2 className='h1-same'>Monday to Friday</h2>
          <p className='p-same'>6:00 AM - 9:00 PM</p>
          <h2 className='h1-same'>Saturday & Sunday</h2>
          <p className='p-same'>8:00 AM - 8:00 PM</p>
        </div>
        <div className="info-4">
          <h1 className='h1-same'>Get a free estimate</h1>
          <h2 className='h1-same'>(414) 567 - 2109</h2>
          <p className='p-same'>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
          <button className='btn btn-primary'>
                Request a free quote
          </button>
          </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <img src={FooterLogo} alt="" />
        <p className='p-same'>Copyright © Cleaning X | Designed by
        <a href="#"> BRIX Templates</a> - Powered by<a href="#"> Webflow </a>-<a href="#"> Licenses</a></p>
      </div>
    </div>
  )
}

export default Footer