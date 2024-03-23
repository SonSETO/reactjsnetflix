import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = "41760a175c9d392190444c5d6c24b693";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return axios
    .get(`${BASE_PATH}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((response) => response.data);
}
