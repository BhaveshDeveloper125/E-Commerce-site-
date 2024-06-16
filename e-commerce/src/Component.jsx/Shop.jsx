import React from 'react'
import './Shop.css'
import Navigation from './Navigation';
import Popularchoice from './Popularchoice'
import NewProduct from './NewProduct'
import Footer from './Footer';


function Shop() 
{
    return(
        <>
         <Navigation/>
         <br /><br /><br /><br /><br />
         <Popularchoice/>
         <NewProduct/>
         <br /><br /><br /><br /><br />
         <Footer/>
        </>
    );
}

export default Shop

