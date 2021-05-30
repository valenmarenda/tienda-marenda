import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './navbar.css';
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
           
          {MenuItems.map ((item, index) =>{
           return (
             <li key={index}><a className={item.cname} href={item.url}>{item.title}</a></li>
           )
           })}
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
        <a className="nav-suscribe">
        <i className="far fa-edit"></i>
        <h3>Registrate</h3>
        </a>
      </nav>
    )
  }
}

export default NavbarHome;