//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavbarHome from './componentes/NavbarHome';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBarCards from './componentes/NavBarCards';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
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
    </Switch>
    <Footer></Footer>
    </BrowserRouter>  
    </div>
  );
}

export default App;
