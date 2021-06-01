import React from 'react';
import { Link} from 'react-router-dom';
import Cartwidget from './CartWidget';
import './NavbarCards.css';
import SearchItems from './SearchItems'

const NavBarCards = (categories) => {
return (
<div className="NavBarCards-container">
<div className="searchItems-container">
  <SearchItems></SearchItems>
</div>
<div className="navBarCards-btn">
      <Link to="/">
        <button className="categoria">Todos</button>
      </Link>
      <Link to="/category/rostro">
        <button className="categoria">Rostro</button>
      </Link>
      <Link to="/category/cuerpo">
        <button className="categoria">Cuerpo</button>
      </Link>
      <Link to="/category/makeup">
        <button className="categoria">Makeup</button>
      </Link>

</div>

<div className="navbarCards-icons">
      <button className="icon-navbar"><i className="far fa-heart"></i></button> <h3>Lista de deseos</h3>
       <Cartwidget/> <h3>Carrito</h3>
      </div>

</div>
)
};

export default NavBarCards;