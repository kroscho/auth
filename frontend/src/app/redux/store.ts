import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './slices';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const rootReducer = combineReducers({
  // [PostApi.reducerPath]: PostApi.reducer, // RTK query
  themeReducer,
});

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  keyPrefix: 'redux-',
  whitelist: ['themeReducer', 'langReducer'],
  autoMergeLevel2,
};

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
