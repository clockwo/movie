export interface Movie {
  userId?: string;
  id: number;
  name: string;
  poster: Poster;
  rating: Rating;
  description?: string;
  type?: string;
  year?: number;
  movieLength?: number;
  genres: Genre[];
}

export interface Genre {
  name: string;
}

export interface Poster {
  url: string;
  previewUrl?: string;
}

export interface Rating {
  kp?: number;
  imdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
}
