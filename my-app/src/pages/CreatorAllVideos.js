import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CreatorVideos from '../components/CreatorVideos';

function CreatorAllVideos() {
    let { slug } = useParams();
    const [creatorData, setCreatorData] = useState(null);
    const [creatorVideos, setCreatorVideos] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
            const itemsRes = await axios.get(`http://localhost:5000/creator/${slug}/videos`);
            setCreatorVideos(itemsRes.data);
          } catch (error) {
            console.error(error);
          }
      };
  
      fetchData();
    }, [slug]);
  
    if (!creatorVideos) {
      return <div>You have no access to view this page. </div>;
    }
  
    return (
      <>
        <CreatorVideos creatorVideos={creatorVideos} />
      </>
    );
  }

export default CreatorAllVideos;