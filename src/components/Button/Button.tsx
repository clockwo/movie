import type { ButtonProps } from './Button.props';
import styles from './Button.module.css';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
