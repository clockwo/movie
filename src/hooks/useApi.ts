import type { Movie } from '@/interfaces/movie.interface';
import type { MovieByID } from '@/interfaces/movieByID.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'DRT7XEH-7X7M89T-QDKWA6G-DTB4NN3';
const PREFIX = 'https://api.kinopoisk.dev/v1.4/movie';
const MOVIES_STORAGE_KEY = 'movies';

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

const requestMovieByID = async (id: number) => {
  try {
    const { data } = await axios.get<MovieResponse>(`${PREFIX}/${id}`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return null;
  }
};

export const useApi = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async (name: string) => {
    const storedMovies = localStorage.getItem(MOVIES_STORAGE_KEY);
    if (storedMovies) {
      const parsedMovies: Movie[] = JSON.parse(storedMovies);
      const movieExists = parsedMovies.some((movie) =>
        movie.name.toLowerCase().includes(name.toLowerCase())
      );
      if (movieExists) {
        setMovies(parsedMovies);
        return;
      }
    }
    const encodedName = encodeURIComponent(name);
    const data = await requestMovies(encodedName);
    localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(data));
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies('Мстители');
  }, []);

  const findMovies = async (name: string) => {
    await fetchMovies(name);
  };

  return { movies, findMovies };
};
