import type { Movie } from '@/interfaces/movie.interface';
import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import Error from '../Error/Error';
import styles from './Movie.module.css';
import Rating from '@/components/Rating/Rating';
import Favorite from '@/components/Favorite/Favorite';

const Movie = () => {
  const { data } = useLoaderData() as { data: Movie };
  return (
    <Suspense fallback="Загружаю...">
      <Await
        resolve={data}
        errorElement={
          <Error
            message="404"
            description="Мы не нашли такого фильма или случилась ошибка!"
          />
        }
      >
        {({ data }: { data: Movie }) => (
          <>
            <div className={styles.header}>
              <Link className={styles.linkToHome} to={'/'}>
                Поиск фильмов
              </Link>
              <h1 className={styles.title}>{data.name}</h1>
            </div>
            <div className={styles.body}>
              <img
                className={styles.poster}
                src={data.poster.url}
                alt="Poster"
                width={480}
                height={720}
              />
              <div className={styles.movieInfo}>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.ratingAndFavorite}>
                  <Rating rating={data.rating.imdb || 0} />
                  <Favorite
                    id={data.id}
                    name={data.name}
                    rating={data.rating.imdb}
                    image={data.poster.url}
                  />
                </div>
                <div className={styles.extraInfo}>
                  <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Тип</p>
                    <p className={styles.infoItemValue}>{data.type}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Дата выхода</p>
                    <p className={styles.infoItemValue}>{data.year}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Длительность</p>
                    <p className={styles.infoItemValue}>
                      {data.movieLength} мин
                    </p>
                  </div>
                  <div className={styles.infoItem}>
                    <p className={styles.infoItemTitle}>Жанр</p>
                    <p className={styles.infoItemValue}>
                      {data.genres.map((genre) => genre.name).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default Movie;
