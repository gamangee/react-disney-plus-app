import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/request';
import './Banner.css';
import styled from 'styled-components';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // 현재 상영중인 영화 정보를 가져오기(여러 영화)
      const response = await axios.get(requests.fetchNowPlaying);

      // 여러 영화 중 영화 하나의 ID를 가져오기
      const movieId =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ].id;

      // 특정 영화의 더 상세한 정보를 가져오기
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: 'videos' },
      });

      setMovie(movieDetail);
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie) return <div>로딩중</div>;

  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width='640'
              height='360'
              frameborder='0'
              allow='autoplay; fullscreen'
            ></Iframe>
          </HomeContainer>
        </Container>
        <DeleteBtn onClick={() => setIsClicked(false)}>X</DeleteBtn>
      </>
    );
  } else {
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ fontSize: 10 }} className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>
        </div>
        <div className='banner__buttons'>
          {movie?.videos?.results[0]?.key ? (
            <button
              className='banner__button play'
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
          ) : null}
          <p className='banner__description'>{movie.overview}</p>
        </div>
        <div className='banner--fadeBottom' />
      </header>
    );
  }
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  outline: none;
`;
