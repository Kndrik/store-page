import './App.css';
import Header from './components/Header';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [articlesAmount, setArticlesAmount] = useState(1);
  const [isHome, setIsHome] = useState(true);
  let classes = "pageContainer" + (isHome ? " visible" : "");
  return (
      <BrowserRouter>
        <div className={classes}>
          <Header isHome={isHome} articlesAmount={articlesAmount}/>
          <Routes>
              <Route path="/" element={<Home onChange={() => setIsHome(true)} />} />
              <Route path="/shop/:category" element={<Shop onChange={() => setIsHome(false)}/>} />
              <Route path="/about" element={<About onChange={() => setIsHome(false)}/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
