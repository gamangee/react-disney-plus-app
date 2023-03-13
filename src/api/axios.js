// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   params: {
//     api_key: 'da39d3b045165964fb8826029423d24c',
//     language: 'ko-KR',
//   },
// });

// export default instance;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b18e798ff377ef49f1c335283e7c43d6',
    language: 'ko-KR',
  },
});

export default instance;
