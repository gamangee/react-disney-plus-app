import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

// 1. 경로에 있는 검색어를 가지고 오기
// 2. 검색어를 이용해서 요청을 보내기 => the movie db api
// 3. 요청에 맞는 데이터를 가져오기
// 4. state에 넣어주기
// 5. state => UI

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovies(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (
            (movie.backdrop_path !== null) &
            (movie.media_type !== 'person')
          ) {
            const movieImageURL =
              'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path;

            return (
              <div className='movie' key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className='movie__column-poster'
                >
                  <img
                    src={movieImageURL}
                    alt='movie'
                    className='movie__poster'
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>
            찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다
            <div className=''></div>
          </p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
