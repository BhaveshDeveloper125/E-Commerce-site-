import React from 'react'
import lock from '../assets/lock.png'
import truck from '../assets/truck.webp'
import easyReturn from '../assets/refresh.png'
import tracker from '../assets/tracking.jpg'
import ServiceBox from './ServiceBox'
ServiceBox

function Services() 
{
    return(
        <>
            <div className="service-box">
                <ServiceBox url={lock} title='Secure Payments' desc='Shop with confidence knowing that your transactions are safeguarded'/>
                <ServiceBox url={truck} title='Free Shipping' desc='Shopping with no extra charges – savor the liberty of complimentary shipping on every order'/>
                <ServiceBox url={easyReturn} title='Easy Returns' desc='With our hassle-free Easy Returns, changing your mind has never been more convenient'/>
                <ServiceBox url={tracker} title='Order Tracking' desc='Stay in the loop with our Order Tracking feature – from checkout to your doorstep'/>
            </div>
        </>
    );
}

export default Services

