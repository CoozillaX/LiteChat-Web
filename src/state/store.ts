import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import appReducer from "@/views/App/slice";

localForage.config({
  name: "LITECHAT",
  storeName: "redux_store"
});

const persistConfig = {
  key: "root",
  storage: localForage,
  whitelist: ["app"]
};

const rootReducer = combineReducers({
  app: appReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
