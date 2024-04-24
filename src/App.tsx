import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Paragraph from '@/components/Paragraph/Paragraph';
import Input from '@/components/Input/Input';
import Navbar from '@/components/Navbar/Navbar';
import Item from '@/components/Item/Item';
import ItemList from '@/components/ItemList/ItemList';
import { useContext, useRef } from 'react';
import SearchIcon from '@/assets/icons/search.svg';
import styles from './App.module.css';
import { UserContext } from './context/user.context';

const App = () => {
  const movies = [
    {
      id: 1,
      name: 'Black Window',
      rating: 324,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 2,
      name: 'Shang Chi',
      rating: 124,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 3,
      name: 'Loki',
      rating: 235,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 4,
      name: 'How I Met Your Mother',
      rating: 123,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 5,
      name: 'Money Heist',
      rating: 8125,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 6,
      name: 'Friends',
      rating: 123,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 7,
      name: 'The Big Bang Theory',
      rating: 12,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },

    {
      id: 8,
      name: 'Two And a Half Men',
      rating: 456,
      image: 'https://i.imgur.com/dbzIjPO.png',
    },
  ];

  const { loginUser } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onLoginClick = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      if (value) {
        loginUser(value);
      }
    }
  };

  const onClickLog = () => {
    console.log('Click on button!');
  };

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.info}>
        <Heading>Поиск</Heading>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
      </div>
      <div className={styles.search}>
        <Input placeholder={'Введите название...'} icon={SearchIcon} />
        <Button onClick={onClickLog}>Искать</Button>
      </div>
      <ItemList>
        {movies.map((movie) => (
          <Item
            key={movie.id}
            name={movie.name}
            image={movie.image}
            rating={movie.rating}
          />
        ))}
      </ItemList>

      {/* Remove later to login page */}
      <div className={styles.info}>
        <Heading>Вход</Heading>
        <Input ref={inputRef} placeholder={'Ваше имя'} />
        <Button onClick={onLoginClick}>Войти в профиль</Button>
      </div>
    </div>
  );
};

export default App;
