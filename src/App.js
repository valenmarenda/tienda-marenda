//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavbarHome from './componentes/NavbarHome';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavbarHome/>
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
    </Switch>
    </BrowserRouter>  
    </div>
  );
}

export default App;
