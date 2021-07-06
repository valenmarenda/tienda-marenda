import React from 'react';
import { Link} from 'react-router-dom';
import './NavbarCards.css';
import AcordionNavBar from './AcordionNavBar'

const NavBarCards = () => {
return (
<div className="NavBarCards-container">
<div className="navbarCards-icons">
     <i className="far fa-heart"></i> <div className="linea-carrito"><p>Lista de deseos</p></div>
     
      </div>
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