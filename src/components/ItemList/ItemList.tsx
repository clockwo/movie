import styles from './ItemList.module.css';
import type { ItemListProps } from './ItemList.props';

const ItemList = ({ children }: ItemListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export default ItemList;
