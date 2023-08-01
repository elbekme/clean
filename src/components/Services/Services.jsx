import React from 'react'
import './Services.scss';
import Services1 from '../../assets/images/services-1.png';
import Services2 from '../../assets/images/services-2.png';
import Services3 from '../../assets/images/services-3.png';

const Services = () => {
  return (
    <div className='Services'>
        <div className="services-top">
            <h1 className='h1-same'>Our Services</h1>
            <button className='btn-primary btn'>
                Explore services
            </button>
        </div>
        <div className="services-box">
            <div className="boxes">
                <img className='image' src={Services1} alt="" />
                <h1 className='h1-same'>House cleaning</h1>
                <p className='p-same'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="boxes">
                <img src={Services2} alt="" />
                <h1 className='h1-same'>Office cleaning</h1>
                <p className='p-same'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="boxes">
                <img src={Services3} alt="" />
                <h1 className='h1-same'>Industrial cleaning</h1>
                <p className='p-same'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
        </div>
    </div>
  )
}

export default Services