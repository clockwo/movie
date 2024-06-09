import { forwardRef } from 'react';

import styles from './Input.module.css';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input ref={ref} className={styles.input} {...props} type="text" />
        {icon && (
          <img
            className={styles.icon}
            src={icon}
            alt="InputIcon"
            loading="lazy"
            width={24}
            height={24}
          />
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
