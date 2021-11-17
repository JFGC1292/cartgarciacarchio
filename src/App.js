import React from 'react';
import { NavBar } from "./components/NavBar/NavBar.js"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemCount } from './components/ItemCount/ItemCount.js';

function App() {

  const onAddHandler = () => {
    alert("Producto agregado al carrito")
  }

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount stock={10} initial={0} onAdd={onAddHandler} />
    </>
  );
}

export default App;