import React from 'react';
import { NavLink} from 'react-router-dom';
import Cartwidget from './CartWidget';
import './NavbarCards.css';
import SearchItems from './SearchItems'

const NavBarCards = (categories) => {
return (
<div className="NavBarCards-container">
<div>
  <SearchItems></SearchItems>
</div>
<div >
{categories.children?.map (cat => {
        return (
            <>
            <NavLink to= {cat.addres} >
            <button className="categoria">{cat.text}</button>
            </NavLink>
            </>
        );
      })
    }
</div>

<div className="">
      <button className="icon-navbar"><i className="far fa-heart"></i></button>
       <Cartwidget/>
      </div>

</div>
)
};

export default NavBarCards;