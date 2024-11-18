import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { addCourseAsync } from "../features/cartSlice"; // Import addCourseAsync action
import htmlData from "./html.json"; // Assuming this contains the lessons data
import "./Coursesdet.css";

const Coursesdet = () => {
  const location = useLocation();
  const { courseName, imageSrc } = location.state || {}; // Assuming you pass imageSrc in the state
  const lessons = htmlData.lessons; // Get lessons data
  const dispatch = useDispatch(); // Initialize dispatch

  const [currentIndex, setCurrentIndex] = useState(0); // Handle lesson navigation

  // Get the email of the logged-in user from Redux (assuming it's stored there)
  const email = useSelector((state) => state.user.email);

  // Lesson navigation handlers
  const handleLessonClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextLesson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lessons.length);
  };

  const handlePreviousLesson = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + lessons.length) % lessons.length);
  };

  const selectedLesson = lessons[currentIndex]; // Get the selected lesson details

  // Handle course purchase
  const handlePurchaseCourse = () => {
    

    // Dispatch addCourseAsync action to add the course to the user's courses
    dispatch(addCourseAsync({ email, course: { title: 'HTML', imageSrc: 'src/assets/ht.png' } }));
  };

  return (
    <div className="det">
      <div className="det3">
        <button onClick={handlePreviousLesson} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNextLesson}
          disabled={currentIndex === lessons.length - 1}
        >
          Next
        </button>
      </div>

      <div className="topshop2">
        <Link to="/">Home | </Link>
        <Link to="/Courses">Courses | </Link>
        <span className="toppp">Course Details</span>
      </div>

      <div className="det1">
        <div className="det11">
          {selectedLesson ? (
            <>
              <div className="det111">
                <h2>{selectedLesson.lesson}:</h2>
                <pre>{selectedLesson.content}</pre>
              </div>
              <div className="det1111">
                <h4>Example:</h4>
                <pre>{selectedLesson.example}</pre>
              </div>
            </>
          ) : (
            <p>Please select a lesson to view details.</p>
          )}
        </div>

        <div className="det12">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              className={currentIndex === index ? "det12b2" : "det12b1"}
              onClick={() => handleLessonClick(index)}
            >
              <h4>{lesson.lesson}</h4>
            </button>
          ))}
        </div>
      </div>

      <div className="det2">
        <div className="det21">
          <div>
            <h2>Course Details</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <h2>Certification</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <h2>Who this course is for</h2>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <h2>What you'll learn in this course:</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>

        <div className="det22">
          <div className="det221">
            <div className="det221box">
              <div className="det221box1">
                <p>Price</p>
              </div>
              <p className="det221box4">Free</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Instructor</p>
              </div>
              <p className="det221box3">Guerri Ryad</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Ratings</p>
              </div>
              <p className="det221box2">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Duration</p>
              </div>
              <p className="det221box2">10 Days</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Lessons</p>
              </div>
              <p className="det221box2">30</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Quizzes</p>
              </div>
              <p className="det221box2">5</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Certificate</p>
              </div>
              <p className="det221box2">Yes</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Language</p>
              </div>
              <p className="det221box2">English</p>
            </div>
            <div className="det221box">
              <div className="det221box1">
                <p>Access</p>
              </div>
              <p className="det221box2">Lifetime</p>
            </div>
          </div>

          <div className="det222">
            <button onClick={handlePurchaseCourse}>Purchase Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdet;
