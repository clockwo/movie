import './App.css';
import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Paragraph from '@/components/Paragraph/Paragraph';

function App() {
  return (
    <>
      <Button>Искать</Button>
      <Heading>Поиск</Heading>
      <Paragraph>
        Введите название фильма, сериала или мультфильма для поиска и добавления
        в избранное.
      </Paragraph>
    </>
  );
}

export default App;
