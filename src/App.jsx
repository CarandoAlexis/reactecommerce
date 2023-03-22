import './index.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContanier from './components/ItemListContanier';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import ItemDetailContanier from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { ShoppingCartProvider } from "./context/CartContext";


function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path ="/" element={<Welcome/>} />
            <Route exact path ="/Catalogo" element={<ItemListContanier/>}/>
            <Route exact path ="/categoria/:categoria" element={<ItemListContanier/>}/>
            <Route exact path ="/Item/:id" element={<ItemDetailContanier/>}/>
            <Route exact path ="/cart" element={<Cart/>}/>
          
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;

