import Paragraph from '@/components/Paragraph/Paragraph';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Input from '@/components/Input/Input';
import Item from '@/components/Item/Item';
import ItemList from '@/components/ItemList/ItemList';
import { movies } from '@/helpers/data';
import SearchIcon from '@/assets/icons/search.svg';
import styles from './Feed.module.css';

const Feed = () => {
  const onClickLog = () => {
    console.log('Click on button!');
  };

  return (
    <>
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
    </>
  );
};

export default Feed;
