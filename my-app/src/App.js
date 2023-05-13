import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatorProfile from "./pages/CreatorProfile";
import Item from "./pages/Item";
import Contact from "./pages/Contact";
import CreatorStream from "./components/CreatorStream"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator/:slug" element={<CreatorProfile />} />
        <Route path="/item/:slug" element={<Item />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stream" element={<CreatorStream/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
