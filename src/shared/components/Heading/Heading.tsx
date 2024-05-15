import styles from './Heading.module.css';
import type { HeadingProps } from './Heading.props';

const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Heading;
