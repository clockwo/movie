import styles from './Item.module.css';
import StarIcon from '@/assets/icons/star.svg';

const Item = ({ name, rating, image }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.rating}>
        <img src={StarIcon} />
        {rating}
      </p>
    </div>
  );
};

export default Item;
