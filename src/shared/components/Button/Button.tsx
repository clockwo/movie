import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.css';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
