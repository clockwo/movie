import styles from './Input.module.css';

const Input = ({ icon, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} type="text" />
      {icon && <img className={styles.icon} src={icon} />}
    </div>
  );
};

export default Input;
