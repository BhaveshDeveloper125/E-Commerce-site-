import React from 'react'

function PopularCards(props) 
{

  function HandleChanges(e)
  {
    let changes = e.target
    changes.style.borderWidth = "1px";
    changes.style.borderStyle = "solid";
    changes.style.borderColor = "black";
    changes.style.color = "black";
  }

  return (
    <>
        <div className="card">
            <img src={props.url} className='card-img'/>
            <p className='type'>{props.type}</p>
            <p className='shop'>{props.shop}</p>
            <p className='price'>{`$${props.price}`}</p>
            <div className="sizes">
              <div className="size" onClick={HandleChanges}>XL</div>
              <div className="size" onClick={HandleChanges}>L</div>
              <div className="size" onClick={HandleChanges}>S</div>
              <div className="size" onClick={HandleChanges}>M</div>
              <div className="size" onClick={HandleChanges}>XS</div>
            </div>
        </div>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </>
  )
}

export default PopularCards

