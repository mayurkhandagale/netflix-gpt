import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
    console.log("trending moves", json);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
