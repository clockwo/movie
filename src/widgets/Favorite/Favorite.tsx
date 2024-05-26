import type { Movie } from '@/shared/interfaces/movie.interface';
import { toggleFavorite } from '@/app/providers/store/movies.slice';
import cn from 'classnames';
import LikeIcon from '@/assets/icons/like.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import styles from './Favorite.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '@/app/providers/store/store';
import { FavoriteProps } from './Favorite.props';
import { useCallback, type MouseEvent } from 'react';
import { isFavoriteSelector } from '@/app/providers/store/selectors/isFavoriteSelector';

const Favorite = ({ id, name, image, rating }: FavoriteProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginedUser } = useSelector((state: RootStore) => state.users);
  const isFavorite = useSelector(isFavoriteSelector(id));

  console.log('Rerender: ', name);

  const addFavorite = useCallback((event: MouseEvent) => {
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
        alt="Icon Favorite"
        width={24}
        height={24}
      />
      <p>{!isFavorite ? 'В избранное' : 'В избранном'}</p>
    </button>
  );
};

export default Favorite;
