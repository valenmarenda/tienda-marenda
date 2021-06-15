//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavbarHome from './componentes/NavbarHome';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBarCards from './componentes/NavBarCards';
import Footer from './componentes/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart'



function App() {
  return (
   <CartProvider>
     <BrowserRouter>
      <NavbarHome/>
    <NavBarCards></NavBarCards>
     <Switch>
      <Route exact path="/">
       <ItemListContainer/>  
      </Route>
      <Route exact path="/category/:catId">
       <ItemListContainer/>  
      </Route>
      <Route exact path="/productDetail">
       <ItemDetailContainer/>
      </Route>
      <Route exact path="/productDetail/:pId">
       <ItemDetailContainer/>
      </Route>
      <Route exact path="/cart">
       <Cart/>
      </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>  
   </CartProvider>
  );
}

export default App;
