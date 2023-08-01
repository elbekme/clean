import React from 'react'
import './Navbar.scss';
import HeaderLogo from '../../assets/images/footer-logo (3).png';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="navbar-item">
            <div className="nav-left">
                <img src={HeaderLogo} alt="" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Articles</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <p className='p-same'>Cart (0)</p>
                <button className='btn btn-primary'>
                    Get a free quote
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar