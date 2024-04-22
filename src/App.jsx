import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Paragraph from '@/components/Paragraph/Paragraph';
import Input from '@/components/Input/Input';
import SearchIcon from '@/assets/icons/search.svg';
import Navbar from '@/components/Navbar/Navbar';
import styles from './App.module.css';

function App() {
  const clickHandler = () => {
    console.log('Click on button!');
  };
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Button onClick={clickHandler}>Искать</Button>
      <Heading>Поиск</Heading>
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
      <Input placeholder={'Введите название...'} icon={SearchIcon} />
    </div>
  );
}

export default App;
