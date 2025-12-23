import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import appReducer from "@/views/App/slice";
import chatReducer from "@/views/Chat/slice";

localForage.config({
  name: "LITECHAT",
  storeName: "redux_store"
});

const rootReducer = combineReducers({
  app: appReducer,
  chat: chatReducer
});

const persistedReducer = persistReducer({
  key: "root",
  storage: localForage,
  whitelist: ["app"]
}, rootReducer);

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
