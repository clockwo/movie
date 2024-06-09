import axios from 'axios';
import { useEffect, useState } from 'react';

import type { Movie } from '@/shared/interfaces/movie.interface';

export const API_KEY = 'DRT7XEH-7X7M89T-QDKWA6G-DTB4NN3';
export const PREFIX = 'https://api.kinopoisk.dev/v1.4/movie';

interface MovieResponse {
  docs: Movie[];
}

const requestRandomMovie = async () => {
  try {
    const { data } = await axios.get<Movie>(
      `${PREFIX}/random?notNullFields=name&notNullFields=poster.url&notNullFields=description`,
      {
        headers: {
          accept: 'application/json',
          'X-API-KEY': API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return undefined;
  }
};

const requestMovies = async (name: string) => {
  try {
    const { data } = await axios.get<MovieResponse>(`${PREFIX}/search`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,
      },
      params: {
        page: 1,
        limit: 8,
        query: name,
      },
    });
    return data.docs;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return [];
  }
};

export const useApi = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = async (name: string) => {
    const data = await requestMovies(name);
    setMovies(data);
  };

  const fetchRandomMovies = async () => {
    try {
      setLoading(true);
      const requests = Array.from({ length: 8 }, () => requestRandomMovie());
      const data = await Promise.all(requests);
      const filteredData = data.filter(
        (movie): movie is Movie => movie !== undefined
      );
      setMovies(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при выполнении запросов:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovies();
  }, []);

  const findMovies = async (name: string) => {
    await fetchMovies(name);
  };

  return { movies, findMovies, loading };
};
