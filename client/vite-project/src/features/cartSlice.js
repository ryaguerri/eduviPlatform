import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch books from the API
export const fetchBooks = createAsyncThunk('cart/fetchBooks', async (email) => {
  const response = await axios.get(`http://localhost:5000/api/users/ryad@gmail.com/books`);
  return response.data; // Assuming response.data is the array of books
});

// Async action to add a book to the user's cart in the backend
export const addToCartAsync = createAsyncThunk('cart/addToCart', async ({ email, book }) => {
  const response = await axios.post(`http://localhost:5000/api/users/ryad@gmail.com/addbook`, book);
  return response.data;
});

// Async action to delete a book from the user's cart in the backend
export const deleteBookAsync = createAsyncThunk('cart/deleteBook', async ({ email, bookTitle }) => {
  await axios.delete(`http://localhost:5000/api/users/ryad@gmail.com/books`, { data: { title: bookTitle } });
  return bookTitle;  
});

// Async action to fetch courses from the API
export const fetchCourses = createAsyncThunk('cart/fetchCourses', async (email) => {
  const response = await axios.get(`http://localhost:5000/api/users/ryad@gmail.com/courses`);
  return response.data; 
});

// Async action to add a course to the user's cart in the backend
export const addCourseAsync = createAsyncThunk('cart/addCourse', async ({ email, course }) => {
  const response = await axios.post(`http://localhost:5000/api/users/ryad@gmail.com/addcourse`, course);
  return response.data; // Assuming response.data is the updated array of courses
});

// Async action to delete a course from the user's courses in the backend
export const deleteCourseAsync = createAsyncThunk('cart/deleteCourse', async ({ email, courseTitle }) => {
  await axios.delete(`http://localhost:5000/api/users/ryad@gmail.com/courses`, { data: { title: courseTitle } });
  return courseTitle; // Returning the course title to identify which course to remove in the reducer
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
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.notification = 'Courses fetched successfully!';
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.notification = 'Failed to fetch courses!';
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
      })
      .addCase(deleteCourseAsync.fulfilled, (state, action) => {
        const index = state.courses.findIndex((course) => course.title === action.payload);
        if (index !== -1) {
          state.courses.splice(index, 1);
          state.cartCount -= 1;
          state.notification = 'Course removed from cart!';
        }
      })
      .addCase(deleteCourseAsync.rejected, (state) => {
        state.notification = 'Failed to remove course from cart!';
      })
      .addCase(addCourseAsync.fulfilled, (state, action) => {
        state.cartCount += 1;
        state.courses.push(action.payload); // Assuming action.payload is the added course
        state.notification = 'Course added to cart!';
      })
      .addCase(addCourseAsync.rejected, (state) => {
        state.notification = 'Failed to add course to cart!';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.cartCount += 1;
        state.items.push(action.payload); // Assuming action.payload is the added book
        state.notification = 'Book added to cart!';
      })
      .addCase(addToCartAsync.rejected, (state) => {
        state.notification = 'Failed to add book to cart!';
      });
  },
});

export const { removeFromCart, clearNotification, addCourse, removeCourse } = cartSlice.actions;
export default cartSlice.reducer;
