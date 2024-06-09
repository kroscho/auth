import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/routes';
import { persistor, store } from './redux/store.ts';
import { ProgressBar } from '../shared/components/index.ts';
import ThemeProvider from './providers/theme/ThemeProvider.tsx';

import './styles/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<ProgressBar />}>
          <BrowserRouter>
            <ThemeProvider>
              <AppRouter />
            </ThemeProvider>
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
