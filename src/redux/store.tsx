import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';
import { registerAPI } from "../features/auth/register/registerAPI";
import { loginAPI } from "../features/auth/login/loginAPI";



const persistConfig = {
    key: "root",
    storage,
};


const rootReducer = combineReducers({
    [registerAPI.reducerPath]: registerAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,

       // Add other reducers here
    
    // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(registerAPI.middleware,loginAPI.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;