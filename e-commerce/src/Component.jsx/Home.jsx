import React from 'react'
import ServiceBox from '../Component.jsx/ServiceBox'
import purse from '../assets/pursee.avif'
import blazzer from '../assets/blazzer-model.jpg'
import discover from '../assets/discover2.jpg'
import Popularchoice from './Popularchoice'
import NewProduct from './NewProduct'
import Footer from './Footer'
import Explore from './Explore'
import Services from './Services'


function Home() 
{
    return(
        <>
         <h1 className='most-popular'>Most Popular</h1>
         <Popularchoice/>

      <div className="bag-collection">
        <div className="bg-changer">
          <img src={purse} id='purse-img' />
          <h1 className='explore'>Explore Our Exquisite Bag </h1><br />
          <h1 className='collections'>Collection Now!</h1>
          <button className='view-bags'>VIEW BAGS COLLECTION</button>
        </div>
      </div>
      
      <div className="blazzer-desiger">
        <div className="inner">
          <p className='para1'>WORK & OFFICE ATTIRE</p>

          <h1>Professional Pinstripe <br />
            Blazers Collection</h1>

            <p className='para2'>
              Elevate your workwear with our Professional Pinstripe Blazers <br /> 
              Collection, where tailored sophistication meets modern <br /> 
              confidence for a powerfully polished office look.
            </p>

            <button className='blazzer-desiger-btn'>
              SHOP NOW
            </button>
        </div>

        <img src={blazzer} className='blazzer-desiger-img' />
      </div>


      <div className="discover">
        <div className="discover-cover">
          <img src={discover} className='discover-cove-img'/>
          <h1 className='discover-cove-title'>
            Discover The Allure Of <br /> 
            Fashion Reinvented!
          </h1>
          <p className='discover-cove-para'>
            Dive into a world of style with our latest collection! Shop now <br /> 
            and redefine your wardrobe narrative!
          </p>
          <button className='shop-now'>
            SHOP NOW
          </button>
        </div>
      </div>


      <h1 className='n-p'>New Products</h1>
      <NewProduct/>

      <br /><br />

      <div className="quote">
        <div className="quote-bg">
          <p className='quote-stars'>
            ⭐⭐⭐⭐⭐
          </p>
          <p className='quote-para'>
           ”FemmeWardrobe Is My Fashion Sanctuary! The Curated <br /><br />
           Collection Effortlessly Blends Chic Trends With Timeless Elegance, <br /><br />
           Making Every Purchase A Delightful Discovery. The Quality Of <br /><br />
           Their Pieces Is Unmatched, And I Appreciate The Brand's <br /><br />
           Commitment To Sustainable Fashion. What Truly Sets <br /> <br />
           FemmeWardrobe Apart Is Their Customer-Centric Approach.”
          </p>
          <p className="fan">
            <b>
              -SARAH M., DEVOTED FEMMEWARDROBE FAN
            </b>
          </p>
        </div>
      </div>

      <Services/>



      <Explore/>
      <Footer/>
        </>
    );
}

export default Home

