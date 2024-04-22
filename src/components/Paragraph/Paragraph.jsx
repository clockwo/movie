import styles from './Paragraph.module.css';

const Paragraph = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Paragraph;
