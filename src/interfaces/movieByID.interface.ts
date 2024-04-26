export interface MovieByID {
  fees: Fees;
  status: any;
  externalId: ExternalId;
  rating: Rating;
  votes: Votes;
  backdrop: Backdrop;
  movieLength: number;
  images: Images;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  distributors: Distributors;
  premiere: Premiere;
  slogan: string;
  year: number;
  budget: Budget;
  poster: Poster;
  facts: Fact[];
  genres: Genre[];
  countries: Country[];
  seasonsInfo: any[];
  persons: Person[];
  lists: string[];
  typeNumber: number;
  alternativeName: string;
  enName: any;
  names: Name[];
  similarMovies: SimilarMovy[];
  updatedAt: string;
  ratingMpaa: string;
  shortDescription: string;
  technology: Technology;
  ticketsOnSale: boolean;
  sequelsAndPrequels: SequelsAndPrequel[];
  imagesInfo: ImagesInfo;
  ageRating: number;
  logo: Logo;
  watchability: Watchability;
  top10: any;
  top250: any;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
  deletedAt: any;
  networks: any;
  videos: Videos;
}

export interface Fees {
  world: any;
  russia: any;
  usa: any;
}

export interface ExternalId {
  imdb: string;
  tmdb: number;
  kpHD: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: any;
}

export interface Premiere {
  world: string;
  russia: string;
  digital: string;
}

export interface Budget {
  value: number;
  currency: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  photo: string;
  name?: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface SimilarMovy {
  id: number;
  name: string;
  enName: any;
  alternativeName: string;
  type: string;
  poster: Poster2;
  year: number;
  rating: Rating2;
}

export interface Poster2 {
  url: string;
  previewUrl: string;
}

export interface Rating2 {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface SequelsAndPrequel {
  id: number;
  name: string;
  alternativeName: string;
  enName: any;
  type: string;
  poster: Poster3;
  rating: Rating3;
  year: number;
}

export interface Poster3 {
  url: string;
  previewUrl: string;
}

export interface Rating3 {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await?: number;
}

export interface ImagesInfo {
  framesCount: number;
}

export interface Logo {
  url: string;
}

export interface Watchability {
  items: any[];
}

export interface Videos {
  trailers: Trailer[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}
