import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar.js"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
// import { ItemCount } from './components/ItemCount/ItemCount.js';
import { CartView } from './components/CartView/CartView.js';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  // const onAddHandler = () => {
  //   alert("Producto agregado al carrito")
  // }

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="products/:catId" element={<ItemListContainer />} />
        <Route path="detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="cart" element={<CartView />} />
        <Route path="*" element={<Navigate to="/" />} />


      </Routes >

      {/* <ItemCount stock={10} initial={0} onAdd={onAddHandler} /> */}

    </BrowserRouter >
  );
}

export default App;