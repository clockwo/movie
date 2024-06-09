import { useSelector } from 'react-redux';

import type { RootStore } from '@/app/providers/store/store.ts';
import Heading from '@/shared/components/Heading/Heading.tsx';
import ItemList from '@/shared/components/ItemList/ItemList.tsx';
import Item from '@/widgets/Item/Item.tsx';

const Favorites = () => {
  const loggedInUser = useSelector(
    (state: RootStore) => state.users.loggedInUser
  );
  const favoritesMovies = useSelector((state: RootStore) => {
    const userMovies = state.movies.find((item) => item.user === loggedInUser);
    return userMovies ? userMovies.movies : [];
  });

  return (
    <>
      <Heading>Избранное</Heading>
      <ItemList>
        {favoritesMovies?.map((movie) => (
          <Item
            key={movie.id}
            id={movie.id}
            name={movie.name}
            rating={movie.rating.imdb ?? 0}
            image={movie.poster.url}
          />
        ))}
      </ItemList>
    </>
  );
};

export default Favorites;
