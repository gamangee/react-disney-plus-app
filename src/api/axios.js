import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'da39d3b045165964fb8826029423d24c',
    language: 'ko-KR',
  },
});

export default instance;
