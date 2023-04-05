// App.js

// import Header from './components/Header'
import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatorProfile from './pages/CreatorProfile';
import Item from './pages/Item';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creator" element={<CreatorProfile />} />
          <Route path="/item" element={<Item />} />
       </Routes>
      <Footer/>
    </>
  );
}

export default App;
