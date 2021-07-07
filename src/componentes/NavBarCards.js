import React from 'react';
import { Link} from 'react-router-dom';
import './NavbarCards.css';
import AcordionNavBar from './AcordionNavBar'
import CartwidgetWishList from './CartWidgetWishList'

const NavBarCards = () => {
return (
<div className="NavBarCards-container">
  <Link to="/cartwishlist">
<div className="navbarCards-wishList ">
     <i className="far fa-heart"></i> 
     <CartwidgetWishList/>
     <div className="linea-carrito"><p>Lista de deseos</p></div>
     
</div>
</Link>
<div className="navBarCards-btn">
      <Link to="/">
        <button className=" btn categoria">Todos</button>
      </Link>
      <Link to="/category/rostro">
        <button className=" btn categoria">Rostro</button>
      </Link>
      <Link to="/category/cuerpo">
        <button className=" btn categoria">Cuerpo</button>
      </Link>
      <Link to="/category/makeup">
        <button className=" btn categoria">Makeup</button>
      </Link>

</div>

<div className="navbarCards-icons">
    
       <AcordionNavBar></AcordionNavBar>
      
      </div>

</div>
)
};

export default NavBarCards;