import Paragraph from '@/components/Paragraph/Paragraph';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import styles from './Error.module.css';
import type { ErrorProps } from './Error.props';

const Error = ({ message, description }: ErrorProps) => {
  const { navigateToHome } = useAppNavigation();

  return (
    <div className={styles.wrapper}>
      <Heading>{message}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button onClick={navigateToHome}>Вернуться на главную страницу</Button>
    </div>
  );
};

export default Error;
