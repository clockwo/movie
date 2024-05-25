import { RouterProvider } from 'react-router-dom';
import router from './providers/router/routes';
import styles from './App.module.css';
import { Provider } from 'react-redux';
import { store } from './providers/store/store';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
