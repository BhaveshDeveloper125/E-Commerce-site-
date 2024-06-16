import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.avif'
import p5 from '../assets/p5.avif'
import PopularCards from '../Component.jsx/PopularCards'


function Popularchoice() 
{
    return(
        <>
         <div className="popular-choice">
                <PopularCards url={p1} type='Party Wear' shop='Bhavesh Cloth SHop' price='100'/>
                <PopularCards url={p2} type='Merrage' shop='ABCD Cloth SHop' price='200'/>
                <PopularCards url={p3} type='Sports' shop='XYZ Cloth SHop' price='300'/>
                <PopularCards url={p4} type='Enjoy' shop='pqr Cloth SHop' price='400'/>
                <PopularCards url={p5} type='Fancy' shop='stu Cloth SHop' price='500'/>
         </div>
        </>
    );
}

export default Popularchoice

