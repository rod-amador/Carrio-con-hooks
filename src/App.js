import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Component/Form';
import Shop from './Component/Shop';

const App = () => {
  const items = [
    {
        id:1,
        producto:"playera",
        costo: 100,
        IVA: 16,
        total: 116,
    },

    {
        id:2,
        producto:"juego",
        costo: 1000,
        IVA: 160,
        total: 1160,
    },

    {
        id:3,
        producto:"balon de oro",
        costo: 2000,
        IVA: 320,
        total: 2320,
    },
]

  const [list, setList] = useState(items);
 
  return (
    <div>
    <Shop/>
    <Form/>

    
    </div>
  );
};

export default App;
