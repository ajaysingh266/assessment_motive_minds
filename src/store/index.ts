import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {productState} from "./initialState";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
};

const createStore = (preloadedState: object) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: ["persist/PERSIST"],
        },
      }),
    preloadedState: preloadedState,
  });
};

export const store = createStore({
  products: productState,
});

export const persistor = persistStore(store);
