import styles from './Item.module.css';
import StarIcon from '@/assets/icons/star.svg';
import LikeIcon from '@/assets/icons/like.svg';
import TrashIcon from '@/assets/icons/trash.svg';

import type { ItemProps } from './Item.props';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '@/store/store';
import { toggleFavorite } from '@/store/movies.slice';
import type { Movie } from '@/interfaces/movie.interface';

const Item = ({ id, name, image, rating }: ItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginedUser } = useSelector((state: RootStore) => state.users);
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
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.item}>
        <img
          className={styles.image}
          src={image}
          alt="poster"
          width={266}
          height={400}
          loading="lazy"
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.rating}>
          <img
            src={StarIcon}
            width={16}
            height={16}
            loading="lazy"
            alt="star icon"
          />
          {rating}
        </p>
        <button onClick={addFavorite} className={cn(styles.favorite)}>
          <img src={LikeIcon} alt="Icon Favorite" width={24} height={24} />
          <p>В избранное</p>
        </button>
      </div>
    </Link>
  );
};

export default Item;
