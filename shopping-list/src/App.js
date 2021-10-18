import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingForm from './components/ShoppingForm'
import React, { useState } from 'react'

function App() {

  const[item, setItem] = useState();
  const[quantity,setQuantity] = useState();

  return (
    <div className = 'App-header'>
        <ShoppingForm setItem={setItem} setQuantity={setQuantity}/>
        <ShoppingList/>
    </div>
  );
}

export default App;
