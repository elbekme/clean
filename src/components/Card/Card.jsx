import React from 'react'
import './Card.scss';
import CardImg from '../../assets/images/Card-logo.png';
import callLogo from '../../assets/images/call (2).png';


const Card = () => {
  return (
    <div className='Card'>
        <div className="card-left">
            <img src={CardImg} alt="" />
        </div>
        <div className="card-right">
            <h5>Covid-19 sanitization</h5>
            <h1 className='h1-same'>We follow guidelines to keep you safe from the COVID-19 virus</h1>
            <p className='p-same'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
            <div className="call-block">
                <button className='btn-call btn btn-primary'>
                Get a free quote
                </button>
                    <img width={72} height={72} className='call-logo' src={callLogo} alt="" />
                <span>
                    <h5>Call us now</h5>
                    <h3 className='h1-same'>(414) 567 - 2109</h3>
                </span>
            </div>
        </div>
        <hr className='line' />
    </div>
  )
}

export default Card