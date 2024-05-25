import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className={styles.text}>{children}</p>;
};

export default Paragraph;
