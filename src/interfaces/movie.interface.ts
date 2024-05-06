export interface Movie {
  userId?: string;
  id: number;
  name: string;
  poster: Poster;
  rating: Rating;
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
