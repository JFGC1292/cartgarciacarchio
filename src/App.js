import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar.js"
import { AppRouter } from './Router/AppRouter.js'
import { CartProvider } from './components/CartContext/CartContext'

function App() {

  // const onAddHandler = () => {
  //   alert("Producto agregado al carrito")
  // }

  return (
    <CartProvider>

      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;