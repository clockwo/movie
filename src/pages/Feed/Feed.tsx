import Paragraph from '@/components/Paragraph/Paragraph';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Input from '@/components/Input/Input';
import Item from '@/components/Item/Item';
import ItemList from '@/components/ItemList/ItemList';
import SearchIcon from '@/assets/icons/search.svg';
import ImagePlaceholder from '@/assets/no-image-placeholder.png';
import styles from './Feed.module.css';
import { useApi } from '@/hooks/useApi';
import { useRef } from 'react';

const Feed = () => {
  const { movies, findMovies } = useApi();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const onSearchSubmit = () => {
    if (searchInputRef.current) {
      const value = searchInputRef.current.value;
      if (value) {
        findMovies(value);
      }
    }
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
        <Input
          ref={searchInputRef}
          placeholder={'Введите название...'}
          icon={SearchIcon}
        />
        <Button onClick={onSearchSubmit}>Искать</Button>
      </div>
      <ItemList>
        {movies.map((movie) => (
          <Item
            key={movie.id}
            name={movie.name}
            image={movie.poster.url || ImagePlaceholder}
            rating={movie.rating.imdb}
          />
        ))}
      </ItemList>
    </>
  );
};

export default Feed;
