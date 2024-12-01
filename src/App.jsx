// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './camponent/common/Header/Navbar';
import Home from './camponent/Screen/Home/Home';
import Breking from './camponent/Screen/Breking/BrekingContainer/Breking';
import Sports from './camponent/Screen/Sports/SportsNews/Sports';
import Nation from './camponent/Screen/Nation';
import World from './camponent/Screen/World';
import Education from './camponent/Screen/Education';
import Entertainment from './camponent/Screen/Entertainment';
import BrekingDetailsScreen from './camponent/Screen/Breking/BrekingDetailsScreen';
import HomeDetailsScreen from './camponent/Screen/Home/HomeDetailsScreen';
import EducationDetails from './camponent/Screen/Education/EducationDetails';
import EntertainmentDetailsScreen from './camponent/Screen/Entertainment/DetailsScreen';
import SportsDetails from './camponent/Screen/Sports/SportsDetails';
import NationDetails from './camponent/Screen/Nation/NationDetails';
import WorldDetails from './camponent/Screen/World/WorldDetails';
import PoliticsNews from './camponent/Screen/Political';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/politics" element={<Politics />} /> */}
        <Route path="/sports" element={<Sports />} />
        <Route path="/breking" element={<Breking />} />
        <Route path="/nation" element={<Nation />} />
        <Route path="/world" element={<World />} />
        <Route path="/education" element={<Education />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/politicsNews" element={<PoliticsNews />} />
        <Route path="/news/:id" element={<BrekingDetailsScreen />} />
        <Route path="/homenews/:id" element={<HomeDetailsScreen />} />
        <Route path="/educationDetails/:id" element={<EducationDetails />} />
        <Route path="/entertainment/:id" element={<EntertainmentDetailsScreen />} />
        <Route path="/sports/:id" element={<SportsDetails />} />
        <Route path="/nation/:id" element={<NationDetails />} />
        <Route path="/world/:id" element={<WorldDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
