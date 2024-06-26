import { useRef } from 'react';

import styles from './Feed.module.css';
import SearchIcon from '@/assets/icons/search.svg';
import ImagePlaceholder from '@/assets/no-image-placeholder.png';
import Button from '@/shared/components/Button/Button.tsx';
import Heading from '@/shared/components/Heading/Heading.tsx';
import Input from '@/shared/components/Input/Input.tsx';
import ItemList from '@/shared/components/ItemList/ItemList.tsx';
import Paragraph from '@/shared/components/Paragraph/Paragraph.tsx';
import { useApi } from '@/shared/hooks/useApi.ts';
import Item from '@/widgets/Item/Item.tsx';


const Feed = () => {
  const { movies, findMovies, loading } = useApi();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const onSearchSubmit = () => {
    if (!searchInputRef.current) return;

    const value = searchInputRef.current.value;
    if (value) {
      findMovies(value);
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
      {loading ? (
        <div className={styles.loading}>
          <h2 className={styles.loadingStatus}>Загружается...</h2>
        </div>
      ) : movies.length > 0 ? (
        <ItemList>
          {movies
            .filter((movie) => movie.name)
            .map((movie) => (
              <Item
                key={movie.id}
                id={movie.id}
                name={movie.name}
                image={movie.poster.url || ImagePlaceholder}
                rating={movie.rating.imdb || 0}
              />
            ))}
        </ItemList>
      ) : (
        <div className={styles.notFound}>
          <h2 className={styles.notFoundTitle}>Упс... Ничего не найдено</h2>
          <p className={styles.notFoundDescription}>
            Попробуйте изменить запрос или ввести более точное название фильма
          </p>
        </div>
      )}
      {}
    </>
  );
};

export default Feed;
