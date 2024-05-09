import type { Movie } from '@/interfaces/movie.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const API_KEY = 'DRT7XEH-7X7M89T-QDKWA6G-DTB4NN3';
export const PREFIX = 'https://api.kinopoisk.dev/v1.4/movie';

interface MovieResponse {
  docs: Movie[];
}

const requestMovies = async (name: string) => {
  try {
    const { data } = await axios.get<MovieResponse>(
      `${PREFIX}/search?page=1&limit=8&query=${name}`,
      {
        headers: {
          accept: 'application/json',
          'X-API-KEY': API_KEY,
        },
      }
    );
    return data.docs;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return [];
  }
};
export const useApi = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (name: string) => {
    const encodedName = encodeURIComponent(name);
    const data = await requestMovies(encodedName);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies('');
  }, []);

  const findMovies = async (name: string) => {
    await fetchMovies(name);
  };

  return { movies, findMovies };
};
