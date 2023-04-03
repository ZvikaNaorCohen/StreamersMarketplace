// App.js

// import Header from './components/Header'
import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { Routes, Route, useLocation} from 'react-router-dom';
// import Navigation from './pages/Navbar';
// import Explore from './pages/Explore';
// import ContactUs from './pages/ContactUs';
// import Search from './pages/Search';

/*
  <Route>
    <Navigation />
        <Route exact path="/" element={<Header />} />
    </Route>
*/

function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
