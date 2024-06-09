import styles from './Error.module.css';
import type { ErrorProps } from './Error.props.ts';
import Button from '@/shared/components/Button/Button.tsx';
import Heading from '@/shared/components/Heading/Heading.tsx';
import Paragraph from '@/shared/components/Paragraph/Paragraph.tsx';
import { useAppNavigation } from '@/shared/hooks/useAppNavigation.ts';

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
