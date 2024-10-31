import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to delete a book from the user's cart in the backend
export const deleteBookAsync = createAsyncThunk('cart/deleteBook', async ({ email, bookTitle }) => {
  await axios.delete(`http://localhost:5000/api/users/${email}/books`, { data: { title: bookTitle } });
  return bookTitle; // Return the book title to identify the deleted item
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartCount: 0,
    notification: '',
    courses: [],
  },
  reducers: {
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.title === action.payload);
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.cartCount = action.payload.length;
        state.notification = 'Books fetched successfully!';
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.notification = 'Failed to fetch books!';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        const bookExists = state.items.some((item) => item.id === action.payload.id);
        if (!bookExists) {
          state.items.push(action.payload);
          state.cartCount += 1;
          state.notification = 'Book added to cart!';
        } else {
          state.notification = 'Book is already in the cart!';
        }
      })
      .addCase(addToCartAsync.rejected, (state) => {
        state.notification = 'Failed to add book to cart!';
      })
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.title === action.payload);
        if (index !== -1) {
          state.items.splice(index, 1);
          state.cartCount -= 1;
          state.notification = 'Book removed from cart!';
        }
      })
      .addCase(deleteBookAsync.rejected, (state) => {
        state.notification = 'Failed to remove book from cart!';
      });
  },
});

export const { 
  removeFromCart, 
  clearNotification, 
  addCourse, 
  removeCourse 
} = cartSlice.actions;

export default cartSlice.reducer;
