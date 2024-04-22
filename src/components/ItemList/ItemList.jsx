import styles from './ItemList.module.css';

const ItemList = ({ children }) => {
  return <div className={styles.list}>{children}</div>;
};

export default ItemList;
