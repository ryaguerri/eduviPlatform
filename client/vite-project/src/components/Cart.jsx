import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, removeFromCart, deleteBookAsync, removeCourse } from "../features/cartSlice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  
  // Get items and courses from Redux state
  const items = useSelector((state) => state.cart.items);
  const courses = useSelector((state) => state.cart.courses);

  // Fetch books when the component mounts
  useEffect(() => {
    const email = 'ryad@gmail.com'; // Replace with the actual email you want to use
    dispatch(fetchBooks(email));
  }, [dispatch]);

  const handleRemoveBook = (book) => {
    const email = 'ryad@gmail.com'; // Replace with the actual email you want to use
    dispatch(deleteBookAsync({ email, bookTitle: book.title }))
      .then(() => dispatch(removeFromCart(book.title))); // Update frontend state after backend deletion
  };

  const handleRemoveCourse = (course) => {
    dispatch(removeCourse(course));
  };

  return (
    <div className="cart">
      <div className="cart1">
        <h2>Purchased Books:</h2>
        <div className="cart1book">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="popularbookitem1" key={index}>
                <div className="popularbookitemimg1">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="popularbookitemimgpara1">
                  <p>{item.title}</p>
                  <p className="para22">{item.price.toFixed(2)}$</p>
                  <button onClick={() => handleRemoveBook(item)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="cart2">
        <h2>Purchased Courses:</h2>
        <div className="cart2course">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div key={index} className="coraboxq">
                <img src={course.imageSrc} alt={course.name} />
                <p>{course.name}</p>
                <button 
                  onClick={() => handleRemoveCourse(course)} 
                  className="biti"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No courses purchased.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
