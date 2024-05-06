import Heading from '@/components/Heading/Heading';
import Item from '@/components/Item/Item';
import ItemList from '@/components/ItemList/ItemList';
import type { RootStore } from '@/store/store';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const loginedUser = useSelector(
    (state: RootStore) => state.users.loginedUser
  );
  const favoritesMovies = useSelector((state: RootStore) => {
    const userMovies = state.movies.find((item) => item.user === loginedUser);
    return userMovies ? userMovies.movies : [];
  });

  return (
    <>
      <Heading>Избранное</Heading>
      <ItemList>
        {favoritesMovies.length > 0 &&
          favoritesMovies.map((movie) => (
            <Item
              key={movie.id}
              id={movie.id}
              name={movie.name}
              rating={movie.rating.imdb}
              image={movie.poster.url}
            />
          ))}
      </ItemList>
    </>
  );
};

export default Favorites;
