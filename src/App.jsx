// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './camponent/common/Header/Navbar';
import Home from './camponent/Screen/Home/Home';
import Contact from './camponent/Screen/Contact/Contact';
import Breking from './camponent/Screen/Breking/BrekingContainer/Breking';
import Sports from './camponent/Screen/Sports/SportsNews/Sports';
import Politics from './camponent/Screen/Political/Politics';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/breking" element={<Breking />} />
      </Routes>
    </Router>
  );
}

export default App;
