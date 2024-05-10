import type { Movie } from '@/interfaces/movie.interface';
import { toggleFavorite } from '@/store/movies.slice';
import cn from 'classnames';
import LikeIcon from '@/assets/icons/like.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import styles from './Favorite.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '@/store/store';
import { FavoriteProps } from './Favorite.props';
import type { MouseEvent } from 'react';

const Favorite = ({ id, name, image, rating }: FavoriteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginedUser } = useSelector((state: RootStore) => state.users);
  const movies = useSelector((state: RootStore) => state.movies);

  const isFavorite = movies
    .find((movie) => movie.user === loginedUser)
    ?.movies.some((movie) => movie.id === id);

  const addFavorite = (event: MouseEvent) => {
    event.preventDefault();
    const movie: Movie = {
      id: id,
      name: name,
      poster: { url: image },
      rating: { imdb: rating },
    };
    if (loginedUser) {
      dispatch(toggleFavorite({ user: loginedUser, movie }));
    }
  };

  return (
    <button
      onClick={addFavorite}
      className={cn(styles.favorite, {
        [styles.active]: isFavorite,
      })}
    >
      <img
        src={!isFavorite ? LikeIcon : TrashIcon}
        alt="Icon Favorite"
        width={24}
        height={24}
      />
      <p>{!isFavorite ? 'В избранное' : 'В избранном'}</p>
    </button>
  );
};

export default Favorite;
