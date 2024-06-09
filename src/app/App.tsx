import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import styles from './App.module.css';
import router from './providers/router/routes';
import { store } from './providers/store/store';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
          <Suspense>
              <RouterProvider router={router} />
          </Suspense>
      </Provider>
    </div>
  );
};

export default App;
