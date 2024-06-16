import React from 'react'
import PopularCards from './PopularCards';
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.webp'
import p9 from '../assets/p9.jpg'
import p10 from '../assets/p10.jpg'


function NewProduct() 
{
    return(
        <>
         <div className="new-products">
            <PopularCards url={p6} type='Party Wear' shop='Bhavesh Cloth Shop' price='100'/>
            <PopularCards url={p7} type='Merrage' shop='ABCD Cloth SHop' price='200'/>
            <PopularCards url={p8} type='Sports' shop='XYZ Cloth SHop' price='300'/>
            <PopularCards url={p9} type='Enjoy' shop='pqr Cloth SHop' price='400'/>
            <PopularCards url={p10} type='Fancy' shop='stu Cloth SHop' price='500'/>
         </div> 
        </>
    );
}

export default NewProduct

