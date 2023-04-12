import './App.css';
import Header from './components/Header';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [articlesAmount, setArticlesAmount] = useState(1);
  return (
      <BrowserRouter>
          <Header articlesAmount={articlesAmount}/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
