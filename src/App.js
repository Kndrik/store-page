import './App.css';
import Header from './components/Header';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [basket, setBasket] = useState([]);
  const [isHome, setIsHome] = useState(true);
  let classes = "pageContainer" + (isHome ? " visible" : "");

  function addToBasket(article) {
    toast(`${article.title} added to your basket.`, {
      position: "top-right",
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

  return (
      <BrowserRouter>
        <ToastContainer />
        <div className={classes}>
          <Header isHome={isHome} articlesAmount={basket.length}/>
          <Routes>
              <Route path="/" element={<Home onChange={() => setIsHome(true)} />} />
              <Route path="/shop/:category" element={<Shop onAddToBasket={addToBasket} onChange={() => setIsHome(false)}/>} />
              <Route path="/about" element={<About onChange={() => setIsHome(false)}/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
