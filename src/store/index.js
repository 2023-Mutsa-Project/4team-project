import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 
    persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }
    )
})

export const persistor = persistStore(store);