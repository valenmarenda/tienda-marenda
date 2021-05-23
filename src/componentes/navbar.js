//import { makeStyles } from '@material-ui/core/styles'
//import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"
//import MenuIcon from '@material-ui/icons/Menu';
//import Accordion from '@material-ui/core/Accordion';
//import AccordionSummary from '@material-ui/core/AccordionSummary';
//import AccordionDetails from '@material-ui/core/AccordionDetails';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




//const useStyles = makeStyles((theme) => ({
  //  root: {
  //    flexGrow: 1,
   // },
   //menuButton: {
   //   marginRight: theme.spacing(2),
  //  },
 //   title: {
 //     flexGrow: 1,
  // },
 //}));


//const Navbar = () => {
  //  const classes = useStyles();
   // return (
   //     <AppBar position="static">
    //      <Toolbar>
//
    //        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //          <MenuIcon />
   //           </IconButton>
//
   //         <Typography variant="h6" className={classes.title}>logo
 //           </Typography>
  //          <Button color="inherit">Login</Button>
  //        </Toolbar>
//        </AppBar>)
//}

//export default Navbar; 

import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './navbar.css';
import Cartwidget from './CartWidget';
import logo from '../componentes/img/logo.png';

class Navbar extends Component {
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
      </div>
      <div>
       <a href="#">
        <div className="logo-container">
          <img src={logo} alt=""/>
        </div>
       </a>
      </div>
      <div className="btn-carrito">
       <Cartwidget/>
      </div>
      </nav>
    )
  }
}

export default Navbar