import React from 'react'


function ServiceBox(prop) 
{
  return (
    <>
        <div className="service-item">
            <img src={prop.url} className='service-item-img'/>
            <h1 className='service-item-title'>{prop.title}</h1>
            <p className='service-item-desc'>{prop.desc}.</p>
        </div>     
    </>
  )
}

export default ServiceBox

