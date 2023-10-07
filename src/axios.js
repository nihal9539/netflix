import axios from 'axios';
import {baseUrl} from './Components/constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  //api =  https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
  //action = https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate

//image https://image.tmdb.org/t/p/w500/
// tr = https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>
//originals =https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
  export default instance;