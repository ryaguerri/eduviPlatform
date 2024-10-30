import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartCount: 0,
    notification: '',
    courses: [], // New state to store purchased courses
  },
  reducers: {
    addToCart: (state, action) => {
      const bookExists = state.items.some((item) => item.id === action.payload.id);
      if (bookExists) {
        state.notification = 'Book is already in the cart!';
      } else {
        state.items.push(action.payload);
        state.cartCount += 1;
        state.notification = 'Book added to cart!';
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.cartCount -= 1;
        state.notification = 'Book removed from cart!';
      } else {
        state.notification = 'Book not found in cart!';
      }
    },
    clearNotification: (state) => {
      state.notification = '';
    },
    addCourse: (state, action) => {
      const courseExists = state.courses.some((course) => course.name === action.payload.name);
      if (courseExists) {
        state.notification = 'Course is already purchased!';
      } else {
        state.cartCount += 1;
        state.courses.push(action.payload);
        state.notification = 'Course added to cart!';
      }
    },
    removeCourse: (state, action) => {
      const index = state.courses.findIndex((course) => course.name === action.payload.name);
      if (index !== -1) {
        state.courses.splice(index, 1);
        state.cartCount -= 1;
        state.notification = 'Course removed from cart!';
      } else {
        state.notification = 'Course not found in cart!';
      }
    },
  },
});

export const { addToCart, removeFromCart, clearNotification, addCourse, removeCourse } = cartSlice.actions;
export default cartSlice.reducer;
