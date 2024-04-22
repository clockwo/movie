import styles from './Heading.module.css';

const Heading = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Heading;
