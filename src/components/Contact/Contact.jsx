import './Contact.scss';
import React from 'react';
import callLogo from '../../assets/images/call (2).png';
const Contact = () => {
  return (
    <div id='contact'>
        <div className="contact-frame">
            <div className="contact-frame_left">
                <h1 className='h1-same'>Contact Us</h1>
                <p className='p-same'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                <div>
                    <img src={callLogo} alt="" />;
                    <span>
                        <p className='p-same'>Call us now</p>
                        <h2>(414) 567 - 2109</h2>
                    </span>
                </div>
                <hr />
                <h3 className='h1-same'>Not convinced yet?</h3>
                <p className='p-same'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                <button className='btn btn-light'>
                    Browse our packages
                </button>
            </div>
            <div className="contact-frame_right">
                {/* <form >
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" value="John">
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" value="Doe">
                    <input type="submit" value="Submit">
                </form>  */}
                <form action="">
                    <div>
                        <label htmlFor="fname">Full name</label><br />
                        <input type="text" id='fname' name='fname' required/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone number</label><br />
                        <input type="tel" id='phone' name='phone' required/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label><br />
                        <input type="address" id='address' name='address' required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id='email' name='email' required/>
                    </div>
                    <div>
                        <label htmlFor="text">Requested service</label><br />
                        <input type="text" id='text' name='text' required/>
                    </div>
                    <div>
                        <label htmlFor="text">Day of  service</label><br />
                        <input type="text" id='text' name='text' required/>
                    </div>
                    <div className='last-input'>
                        <label htmlFor="comment">Add a note</label><br />
                        <textarea rows={5} cols={50} name='comment'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Submit message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact