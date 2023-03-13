import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  return (
    <section style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <img
        style={{ width: '100%' }}
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt='modal__poster-img'
      />
    </section>
  );
};

export default DetailPage;
