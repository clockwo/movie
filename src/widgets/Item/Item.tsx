import { Link } from 'react-router-dom';

import styles from './Item.module.css';
import type { ItemProps } from './Item.props';
import Rating from '../../shared/components/Rating/Rating';
import Favorite from '../Favorite/Favorite';

const Item = ({ id, name, image, rating }: ItemProps) => {
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
        <div className={styles.ratingContainer}>
          <Rating rating={rating} />
        </div>
        <Favorite id={id} name={name} image={image} rating={rating} />
      </div>
    </Link>
  );
};

export default Item;
