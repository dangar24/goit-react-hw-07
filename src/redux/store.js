import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  contactReducer  from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistContactsConfig = {
    key: 'contactsData',
    storage,
};
 
const persistedContactsReducer = persistReducer(persistContactsConfig, contactReducer);


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer, 
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)


