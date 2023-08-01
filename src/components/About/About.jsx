import React from 'react'
import './About.scss';
import Logo1 from '../../assets/images/about-1.png';
import Logo2 from '../../assets/images/about-2.png';
import Logo3 from '../../assets/images/about-3.png';
const About = () => {
  return (
    <div className='about'>
        <h1>About Us</h1>
        <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className="about-box">
            <div className="boxes">
                <img className='boxes-about_img' src={Logo1} alt="logo" />
                <h1>1. Schedule online</h1>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="boxes">
                <img className='boxes-about_img' src={Logo2} alt="logo" />
                <h1>2. Pay online easily</h1>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="boxes">
                <img className='boxes-about_img' src={Logo3} alt="logo" />
                <h1>3. Get your house cleaned</h1>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
        </div>
        <div className='button-div'>
                <button className='btn btn-primary'>
                    Get a free quote
                </button>
                <button className='btn btn-primary'>
                Explore services
                </button>
        </div>
    </div>
  )
}

export default About