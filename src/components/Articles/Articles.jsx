import React from 'react'
import './Articles.scss'
import Aricles1 from '../../assets/images/articles-1.png';
import Aricles2 from '../../assets/images/articles-2.png';


const Articles = () => {
  return (
    <div className='articles'>
        <div className="articles-top">
            <h1 className='h1-same'>Articles & resources</h1>
            <div>
                <button className='btn btn-primary'>
                    Get a free quote
                </button>
                <button className='btn btn-primary'>
                    Browse articles
                </button>
            </div>
        </div>
        <div className="articles-main">
            <div className="articles-main_left">
                <img src={Aricles1} alt="LOGO" />
                <div className="left-box">
                    <h2>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                    <p className='p-same'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                    <div>
                        <h2 className='h1-same'>Jan 28, 2022</h2>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="articles-main_left">
                <img src={Aricles2} alt="LOGO" />
                <div className="left-box">
                    <h2>How to properly disinfect your phone and other electronics</h2>
                    <p className='p-same'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                    <div>
                        <h2 className='h1-same'>Feb 1, 2022</h2>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles