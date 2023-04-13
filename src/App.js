import './App.css';
import Header from './components/Header';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [basket, setBasket] = useState([]);
  const [isHome, setIsHome] = useState(true);
  const [onBasket, setOnBasket] = useState(false);
  let classes = "pageContainer" + (isHome ? " visible" : "");

  function addToBasket(article) {
    toast(`${article.title} added to your basket.`, {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    let array = basket;
    if(array.length === 0) {
      setBasket([[article, 1]]);
      return;
    }

    let contains = false;
    array.forEach(elem => {
      if (elem[0].id === article.id) {
        elem[1]++;
        contains = true;
      }
    });

    if(!contains) {
      array.push([article, 1]);
    }

    setBasket([...array]);
  }

  function updateBasket(article, newAmount) {
    let array = basket;
    array.forEach((elem) => {
      if (elem[0].id === article.id) {
        elem[1] = newAmount;
      }
    });
    setBasket([...array]);
  }
  
  const cartPanel = onBasket ? <Cart updateBasket={updateBasket} basket={basket} /> : '';

  return (
      <BrowserRouter>
        <ToastContainer />
        <div className={classes}>
          {cartPanel}
          <Header onBasketClick={() => setOnBasket(!onBasket)} isHome={isHome} articlesAmount={basket.length}/>
          <Routes>
              <Route path="/" element={<Home onChange={() => {setIsHome(true); setOnBasket(false) }} />} />
              <Route path="/shop/:category" element={<Shop onAddToBasket={addToBasket} onChange={() => {setIsHome(false); setOnBasket(false)}}/>} />
              <Route path="/about" element={<About onChange={() => {setIsHome(false); setOnBasket(false); }}/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
