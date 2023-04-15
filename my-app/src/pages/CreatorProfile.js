import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatorHeader from '../components/CreatorHeader';
import CreatorItems from '../components/CreatorItems.js';
import axios from 'axios';

function CreatorProfile() {
  let { slug } = useParams();
  const [creatorData, setCreatorData] = useState(null);
  const [creatorItems, setCreatorItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(`http://localhost:5000/creator/${slug}`);
        setCreatorData(creatorRes.data);
      } catch (error) {
        console.error(error);
      }

      try {
        const itemsRes = await axios.get(`http://localhost:5000/creator/${slug}/items`);
        setCreatorItems(itemsRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  if (!creatorData || !creatorItems) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CreatorHeader creatorData={creatorData} />
      <CreatorItems creatorItems={creatorItems} />
    </>
  );
}

export default CreatorProfile;