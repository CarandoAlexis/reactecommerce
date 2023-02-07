import './index.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContanier from './components/ItemListContanier';


function App() {
  return (
    <>
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListContanier greeting="Bienvenidos"/>
      </main>
    </>
  );
}

export default App;

