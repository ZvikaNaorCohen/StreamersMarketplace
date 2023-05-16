import Hero from '../components/Hero'
import Carusela from "../components/Carusela";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
      
function Home() {
  const [creatorsData, setCreatorsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(`http://localhost:5000/creator/`);
        setCreatorsData(creatorRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[1]);

  if (!creatorsData) {
    return <div>Loading...</div>;
  }

  return (
      <>
      <Hero/>
      <Carusela title="Trending" creators={creatorsData} />
      <div className="carusela-spacing" />
      <Carusela title="New On Site" creators={creatorsData} />
      <div className="carusela-spacing" />
      <Carusela title="Don't Miss!" creators={creatorsData} />
      </>
  );
}

export default Home;
