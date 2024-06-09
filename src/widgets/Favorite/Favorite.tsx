import cn from 'classnames';
import { useCallback, type MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Favorite.module.css';
import { FavoriteProps } from './Favorite.props';
import { toggleFavorite } from '@/app/providers/store/movies.slice';
import { isFavoriteSelector } from '@/app/providers/store/selectors/isFavoriteSelector';
import { AppDispatch, RootStore } from '@/app/providers/store/store';
import LikeIcon from '@/assets/icons/like.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import type { Movie } from '@/shared/interfaces/movie.interface';

const Favorite = ({ id, name, image, rating }: FavoriteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loggedInUser } = useSelector((state: RootStore) => state.users);
  const isFavorite = useSelector(isFavoriteSelector(id));

  const addFavorite = useCallback((event: MouseEvent) => {
    event.preventDefault();
    if (!loggedInUser) return;
    const movie: Movie = {
      id: id,
      name: name,
      poster: { url: image },
      rating: { imdb: rating },
    };
    dispatch(toggleFavorite({ user: loggedInUser, movie }));
  }, []);

  return (
    <button
      onClick={addFavorite}
      className={cn(styles.favorite, {
        [styles.active]: isFavorite,
      })}
    >
      <img
        src={!isFavorite ? LikeIcon : TrashIcon}
        alt=""
        width={24}
        height={24}
      />
      <p>{!isFavorite ? 'В избранное' : 'В избранном'}</p>
    </button>
  );
};

export default Favorite;
