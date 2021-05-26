//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
//import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
      {/* <ItemListContainer/>  */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
