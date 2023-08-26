import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleVideoPage from '../components/SingleVideoPage';
import CreatorVideos from '../components/CreatorVideos';

function CreatorVideo() {
  let { slug } = useParams();
  const [creatorData, setCreatorData] = useState(null);
  const [creatorVideos, setCreatorVideos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(`http://localhost:5000/video/${slug}`);
        setCreatorData(creatorRes.data);

        try {
          const itemsRes = await axios.get(`http://localhost:5000/creator/${creatorRes.data.creator}/videos`);
          setCreatorVideos(itemsRes.data);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  if (!creatorData || !creatorVideos) {
    return <div>You have no access to view this page. </div>;
  }
// <CreatorVideos creatorVideos={creatorVideos} />
  return (
    <>
      <SingleVideoPage creatorData={creatorData} />
    </>
  );
}

export default CreatorVideo;
