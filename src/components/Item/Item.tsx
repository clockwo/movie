import styles from './Item.module.css';
import StarIcon from '@/assets/icons/star.svg';
import type { ItemProps } from './Item.props';
import { Link } from 'react-router-dom';

const Item = ({ id, name, rating, image }: ItemProps) => {
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
      </div>
    </Link>
  );
};

export default Item;
