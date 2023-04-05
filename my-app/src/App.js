// App.js

// import Header from './components/Header'
import React from 'react';
import Navbar from './components/Navbar'
import Carusela from "./components/Carusela";
import Footer from './components/Footer'
import Hero from './components/Hero'
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

/*
  THIS CODE IS JUST FOR TESTING, NEED TO DELETE. IT WILL SHOW US HOW CARDS AND CARUSELA WORK
*/
const cards = [
  {
    title: "Card 1",
    image: "https://images.pexels.com/photos/14905759/pexels-photo-14905759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 2",
    image: "https://images.pexels.com/photos/14343389/pexels-photo-14343389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Card 3",
    image: "https://images.pexels.com/photos/15636474/pexels-photo-15636474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Card 4",
    image: "https://images.pexels.com/photos/15140108/pexels-photo-15140108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Card 5",
    image: "https://images.pexels.com/photos/15784886/pexels-photo-15784886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Card 6",
    image: "https://images.pexels.com/photos/16083380/pexels-photo-16083380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Carusela title="Trending" cards={cards} />
      <div className="carusela-spacing" />
      <Carusela title="New On Site" cards={cards} />
      <div className="carusela-spacing" />
      <Carusela title="Don't Miss!" cards={cards} />
      <Footer/>
    </>
  );
}

export default App;
