import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from "./services/shazamCore"

import playerReducer from './features/playerSlice';

console.log('reducerPath',shazamCoreApi.reducerPath)
console.log('reducer',shazamCoreApi.reducer)

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleare: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(shazamCoreApi.middleware)
  }
});



