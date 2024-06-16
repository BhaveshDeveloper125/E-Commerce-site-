import logo from '../assets/—Pngtree—vector search icon_4139928.png'
import cart from '../assets/cart.jpg'
import { Link } from 'react-router-dom';


function Navigation() 
{

  function ShowSearch()
  {
    let state = document.getElementById('searchbox');
    state.style.height = '35px'
    state.style.width = '200px'
    state.style.borderRadius = '10px'
    document.getElementById('searchlogo').style.display = "none"
  }

  return (
    <>
     <div className="container1" >
      <table>
        <tr className="nav-td">
          <td><Link to="/">Home</Link></td>
          <td><Link to="/Shop">Shop</Link></td>
          <td><Link to="/about">About</Link></td>
          <td><Link to="/contact">Contact</Link></td>

          <td><h1><b id="logo-font">ZARA</b></h1></td>
          <td>
            <form action="">
            <img src={cart} id='cartlogo'/>
              <input type="search" name="" id="searchbox" />
              <img src={logo} alt="searchlogo" id="searchlogo" onMouseOver={ShowSearch}/>
            </form>
          </td>
        </tr>
      </table>
      <p className='normal-text'>
        CASUAL & EVERYDAY
      </p>

      <h1 className='comfort-style'>
        Effortlessly Blend Comfort <br />
        & Style!
      </h1>

      <h3 className='effortlessly'>
        Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile <br />
        denim, laid-back tees, and relaxed-fit joggers for your everyday adventures
      </h3>

      <div className="view-collection">
        VIEW COLLECTION
      </div>
     </div>
           
     
    </>
  )
}

export default Navigation
