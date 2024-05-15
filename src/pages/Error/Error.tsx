import Paragraph from '@/shared/components/Paragraph/Paragraph';
import Heading from '@/shared/components/Heading/Heading';
import Button from '@/shared/components/Button/Button';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation';
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
