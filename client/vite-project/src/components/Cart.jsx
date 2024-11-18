import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, fetchCourses, deleteBookAsync, deleteCourseAsync } from "../features/cartSlice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const courses = useSelector((state) => state.cart.courses);

  useEffect(() => {
    const email = 'ryad@gmail.com';
    // Fetch books
    dispatch(fetchBooks(email));
    // Fetch courses
    dispatch(fetchCourses(email));
  }, [dispatch]);

   
  console.log("Fetched Books:", items);
  console.log("Fetched Courses:", courses);

  const handleRemoveBook = (book) => {
    const email = 'ryad@gmail.com';
    dispatch(deleteBookAsync({ email, bookTitle: book.title }));
  };

  const handleRemoveCourse = (course) => {
    const email = 'ryad@gmail.com';
    dispatch(deleteCourseAsync({ email, courseTitle: course.title })); // Ensure the correct key is being passed
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
                  <img src={item.image || "default-image.jpg"} alt={item.title || "No title"} />
                </div>
                <div className="popularbookitemimgpara1">
                  <p>{item.title || "Title not available"}</p>
                  <p className="para22">{item.price ? `${item.price.toFixed(2)}$` : "Price not available"}</p>
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
                <img src={course.image || "src/assets/ht.png"} alt={"No"} />
                <p>{course.title || "Course title not available"}</p>
                <button onClick={() => handleRemoveCourse(course)} className="biti">
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
