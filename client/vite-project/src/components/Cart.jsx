import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeCourse } from "../features/cartSlice";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeFromCart(book));
  };

  // Corrected the function to use book instead of course
  const handleRemoveCourse = (course) => {
    dispatch(removeCourse(course));
  };

  const items = useSelector((state) => state.cart.items);
  const courses = useSelector((state) => state.cart.courses); // Get purchased courses from state

  return (
    <div className="cart">
      <div className="cart1">
        <h2>Purchased Books:</h2>
         
       <div className="cart1book"> {items.length > 0 ? (
          items.map((item, index) => (
            <div className="popularbookitem1" key={index}>
             <div className="popularbookitemimg1"> <img src={item.image} alt={item.title} /></div>
             <div className="popularbookitemimgpara1"> <p>{item.title}</p>
              <p className="para22">{item.price.toFixed(2)}$</p>
              <button onClick={() => handleRemoveBook(item)}>Remove</button></div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}</div>
      </div>
      <div className="cart2">
      <h2>Purchased Courses:</h2>
      {/* <div className="corabox">
              <img src="src/assets/ht.png" alt="" />
              <div className="corabox2">
                <p>HTML</p>
              </div>
              <div className="corabox3">
                <p>
                  HTML is the standard language used to create and design
                  webpages.
                </p>
              </div>
              <button
                onClick={() =>
                  navigate("/Coursesdet", { state: { courseName: "HTML", imageSrc: "src/assets/ht.png" } })
                }
              >
                Class Details
              </button>
            </div> */}
        <div className="cart2course">{courses.length > 0 ? (
          courses.map((course, index) => (
            <div key={index} className="coraboxq">
              <img src={course.imageSrc} alt={course.name} />
              <p>{course.name}</p>
              <button onClick={() => handleRemoveCourse(course)} className="biti">Remove</button> {/* Use handleRemoveCourse */}
            </div>
          ))
        ) : (
          <p>No courses purchased.</p>
        )}</div>
        
        
        
      </div>
    </div>
  );
};

export default Cart;
