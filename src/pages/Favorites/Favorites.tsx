import Heading from '@/components/Heading/Heading';
import Item from '@/components/Item/Item';
import ItemList from '@/components/ItemList/ItemList';

const Favorites = () => {
  return (
    <>
      <Heading>Избранное</Heading>
      <ItemList>
        <Item
          name="Black Window"
          image="https://i.imgur.com/dbzIjPO.png"
          rating={123}
        />
      </ItemList>
    </>
  );
};

export default Favorites;
