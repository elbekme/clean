import React from 'react'
import './Header.scss';
import hLogo from '../../assets/images/header.png';
import callLogo from '../../assets/images/call (2).png'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <h1>Quality cleaning for your home</h1>
            <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
            <div className="call-block">
                <button className='btn-call btn btn-primary'>
                Get a free quote
                </button>
                    <img className='call-logo' src={callLogo} alt="" />
                <span>
                    <p>Call us now</p>
                    <h2>(414) 567 - 2109</h2>
                </span>
            </div>
        </div>
        <div className="header-right">
            <img src={hLogo} alt="header Logo" />
        </div>
    </div>
  )
}

export default Header