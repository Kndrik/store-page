import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import { useState } from 'react';

function App() {
  const [articlesAmount, setArticlesAmount] = useState(0);
  return (
    <div className="App">
      <Header articlesAmount={articlesAmount} />
      <Home />
    </div>
  );
}

export default App;
