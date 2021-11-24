import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar.js"
import { AppRouter } from './Router/AppRouter.js';

function App() {

  // const onAddHandler = () => {
  //   alert("Producto agregado al carrito")
  // }

  return (
    <BrowserRouter>

      <NavBar />

      <AppRouter />

    </BrowserRouter >
  );
}

export default App;