import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreatorHeader from '../components/CreatorHeader';
import CreatorAllVideos from '../components/CreatorAllVideos.js';
import axios from 'axios';

function CreatorVideos() {
  let { slug } = useParams();
  const [creatorData, setCreatorData] = useState(null);
  const [creatorVideos, setCreatorVideos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(`http://localhost:5000/video/${slug}`);
        setCreatorData(creatorRes.data); // Update the state with creator data
      } catch (error) {
        console.error(error);
      }

      try {
        const videosRes = await axios.get(`http://localhost:5000/video/${slug}/videos`);
        setCreatorVideos(videosRes.data); // Update the state with videos array
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  if (!creatorData || !creatorVideos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CreatorHeader creatorData={creatorData} />
      <CreatorAllVideos creatorVideos={creatorVideos} creatorId={slug} />
    </>
  );
}

export default CreatorVideos;
