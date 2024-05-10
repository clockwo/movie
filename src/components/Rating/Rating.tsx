import StarIcon from '@/assets/icons/star.svg';
import styles from './Rating.module.css';

const Rating = ({ rating }: { rating: number }) => {
  return (
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
  );
};

export default Rating;
