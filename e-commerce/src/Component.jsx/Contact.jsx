import React from 'react'
import Navigation from './Navigation';
import './Contact.css'
import Services from './Services';
import Explore from './Explore';
import Footer from './Footer';


function Contact() 
{
    return(
        <>
            <Navigation/>
            <br /><br /><br />

            <div className="sentence">
                <p className='sentence-p'>
                    get in touch
                </p>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <h2>
                    We Value The Connection With Our <br />
                    Community And Are Here To Assist In Any <br />
                    Way We Can. Feel Free To Reach Out Through <br />
                    The Following Channels:
                </h2>
            </div>

            <br /><br />

            <div className="contact">
                <div className="contact-form">
                    <form action="">
                        <input type="text" name="" id="name" placeholder='Name'/> <br /><br />
                        <input type="email" name="" id="email" placeholder='Email'/><br /><br />
                        <textarea name="" id="" placeholder='Message'/> <br /> <br /><br />
                        <input type="submit" value="Submit" id='submit'/>
                    </form>
                </div>
                <div className="contact-details">
                    <div className="phones">
                        <p>phone</p>
                        <h3>
                            +91 9773400215
                        </h3>
                    </div>
                    <div className="email">
                        <p>email</p>
                        <h3>
                            bhavesh2103m@gmail.com
                        </h3>
                    </div>
                    <br />
                    <div className="address">
                        <p>address</p>
                        <h3>
                            Ahmedabad, India - 380026
                        </h3>
                    </div>
                </div>
            </div>

            <br />

            <Services/>

            <Explore/>
            <Footer/>


        </>
    );
}

export default Contact

