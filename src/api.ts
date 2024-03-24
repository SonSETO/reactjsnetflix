import axios from "axios";
import { useQuery } from "react-query";

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
