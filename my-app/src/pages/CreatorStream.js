import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StreamPage from '../components/StreamPage';

function CreatorStream() {
  let { slug } = useParams();
  const [creatorData, setCreatorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creatorRes = await axios.get(`http://localhost:5000/stream/${slug}`);
        setCreatorData(creatorRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);
  
  if (!creatorData) {
    return <div>You have no access to view this page. </div>;
  }

  return (
    <>
      {creatorData && <StreamPage creatorData={creatorData} />}
    </>
  );
}

export default CreatorStream;
