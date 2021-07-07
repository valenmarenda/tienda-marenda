import React, { Component } from 'react'
import './NavbarHome.css';
import logo from '../componentes/img/logo.png';
import {Link} from "react-router-dom"


class NavbarHome extends Component {
  state = { clicked: false}
  handleClick = () => {
    this.setState ({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
      <div>

         <div className="menu-icon" onClick={this.handleClick}>
           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
           <button>Home</button>
           <button>Promociones</button>
           <button>Contacto</button>
           <button>Carrito</button>
         </ul>
         <p>menu</p>
      </div>
      <div className="logo-container">
       <Link to="/">
        <div >
          <img src={logo} alt=""/>
        </div>
        </Link>
      </div>
      <Link to="/register">
        <div className="nav-suscribe">
        <i className="far fa-edit"></i>
        <h3>Suscribite</h3>
        </div>
        </Link>
        

      </nav>

    )
  }
}

export default NavbarHome;