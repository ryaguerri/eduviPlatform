// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; // Default import, no curly braces

export const store = configureStore({
  reducer: { cart: cartReducer },
});
