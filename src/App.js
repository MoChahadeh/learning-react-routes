import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './routes/Home/Home.jsx';
import About from './routes/About/About.jsx';

function App() {

  const [text, setText] = useState('This was passed from App.js');

  return (
    <Routes>
      <Route path="/" element={<Home text={text} setText={setText} />}  />
      <Route path="/about" element={<About text={text} setText={setText} />}  />
    </Routes>
  );
}

export default App;
