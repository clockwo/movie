import type { MovieByID } from '@/interfaces/movieByID.interface';
import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import Error from '../Error/Error';
import styles from './Movie.module.css';

const Movie = () => {
  const { data } = useLoaderData() as { data: MovieByID };
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
        {({ data }: { data: MovieByID }) => (
          <div className={styles.header}>
            <Link className={styles.linkToHome} to={'/'}>
              Поиск фильмов
            </Link>
            <h1 className={styles.title}>{data.name}</h1>
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default Movie;