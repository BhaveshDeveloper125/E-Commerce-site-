import React from 'react'
import Navigation from './Navigation';
import './About.css'
import Explore from './Explore';
import Footer from './Footer';



function About() 
{
    return(
        <>
         <Navigation/>
         <br /><br /><br />
         <div className="about">
            <div className="about-title">
                <h1>From Vision To Vogue: <br /> 
                    The Birth Of <br /> 
                    FemmeWardrobe</h1>
            </div>
            <div className="story">
                <p className='story-p'>OUR STORY</p>
                <h3>Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Way <br /> 
                    Women Experience Fashion.</h3>
                <p className='story-p2'>Fueled by a passion for style and a commitment to individuality, we embarked <br />
                   on a mission to curate a collection that speaks to the diverse tastes and personalities of <br />
                   our cherished customers. From our humble beginnings to the vibrant online space <br />
                   we inhabit today, each milestone represents a chapter in our story. Join us on this <br />
                   fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.</p>
            </div>
         </div>
         <hr />
         <br /><br />

         <h4>QUALITY ASSURANCE</h4>
         <h2>
            We Understand That Fashion Is An Expression Of Identity, <br />
            And We Take Pride In Delivering Products That Embody <br />
            The Highest Standards Of Quality.
         </h2>
         <p className='main-para'>
            Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every <br />
            garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end <br />
            there - rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe <br />
            for fashion that not only captures attention but withstands the test of time.
         </p>
         <br /><br />
         <div className="bg-1">
            <div className="bg-1-bg">
                <p>customer-centric approach</p>
                <h2>
                    Beyond Fashion: Nurturing <br />
                    A Customer-Centric <br />
                    Experience
                </h2>
                <p id='bg-1-bg-mainpara'>
                    We believe that the essence of our success lies in the satisfaction of our customers. <br />
                    Our commitment to providing an exceptional shopping experience goes beyond <br />
                    trends and styles - it's about understanding and meeting the unique needs of <br />
                    every individual who chooses FemmeWardrobe. From personalized <br />
                    recommendations to hassle-free returns, we've crafted every aspect of our service <br />
                    with you in mind. Our dedicated customer support team is here to ensure your <br />
                    journey with us is seamless, enjoyable, and exceeds your expectations. Join our <br />
                    community of empowered fashion enthusiasts, where your satisfaction is not just a <br />
                    priority; it's our passion.

                </p>
            </div>
         </div>
         <br /><br /><br /><br /><br />
         <div className="about-outro">
            <p>
                sustainability initiative
            </p>
            <h2>
                Conscious Fashion For A Better Tomorrow
            </h2>
            <div className="main-para">
                    We Recognize The Responsibility We Hold In Shaping A More <br />
                    Sustainable Future For Fashion. Our Commitment To Eco- <br />
                    Friendly Practices And Sustainable Fashion Choices Is At The <br />
                    Core Of What We Do.
            </div>
         </div>
         <Explore/>
         <Footer/>
        </>
    );
}

export default About

