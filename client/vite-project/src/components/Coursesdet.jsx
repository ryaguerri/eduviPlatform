import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Coursesdet.css";
import htmlData from "./html.json";

const Coursesdet = () => {
  const location = useLocation();
  const { courseName } = location.state || {};
  const lessons = htmlData.lessons;

  // State to hold the index of the selected lesson
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle lesson selection
  const handleLessonClick = (index) => {
    setCurrentIndex(index);
  };

  // Function to handle next lesson
  const handleNextLesson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lessons.length);
  };

  // Function to handle previous lesson
  const handlePreviousLesson = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + lessons.length) % lessons.length
    );
  };

  // Get the currently selected lesson based on currentIndex
  const selectedLesson = lessons[currentIndex];

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
      <div className="topshop1">
        Home | Courses | <span className="toppp">Course Details</span>
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
                <h4>example: </h4>
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
              className={currentIndex === index ? "det12b2" : "det12b1"} // Dynamically set class
              onClick={() => handleLessonClick(index)}
            >
              <h4> {lesson.lesson}</h4>
            </button>
          ))}
        </div>
      </div>

      <div className="det2">
        <div className="det21">
          <div>
            <h2>Course Details</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              suscipit. Facere neque doloribus impedit ipsa nostrum velit earum.
              Alias, quidem earum minima tempore nihil nostrum quasi, laudantium
              perferendis quo, mollitia ut voluptate officia accusamus. Tempore
              quos tenetur nihil est earum culpa consequatur molestias hic
              voluptas, dicta aut nobis? Hic, nam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Saepe, nisi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ipsam, sit.
            </p>
          </div>
          <div>
            <h2>Certification</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores nulla dolore perferendis labore, vero necessitatibus
              quisquam fugit beatae doloremque maiores, molestiae hic modi
              aliquid aut ad illum distinctio veritatis dicta eaque ducimus
              aspernatur sapiente! Ab dolorem eius at voluptatem maiores?
            </p>
          </div>
          <div>
            <h2>Who this course is for</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quis, hic ducimus aliquam quasi qui sapiente iure! Illo possimus
              ea, harum repellendus quos dolores non?
            </p>
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
            <div className="det221box"><div className="det221box1"><p>Price</p></div><p className="det221box4">Free</p></div>
            <div className="det221box"><div className="det221box1"><p>Instructor</p></div><p className="det221box3">Guerri Ryad</p></div>
            <div className="det221box"><div className="det221box1"><p>Ratings</p></div><p className="det221box2">⭐⭐⭐⭐⭐</p></div>
          <div className="det221box"><div className="det221box1"><p>Durations</p></div><p className="det221box2">10 Days</p></div>
          <div className="det221box"><div className="det221box1"><p>Lessons</p></div><p className="det221box2">30</p></div>
          <div className="det221box"><div className="det221box1"><p>Quizzes</p></div><p className="det221box2">5</p></div>
          <div className="det221box"><div className="det221box1"><p>Certificate</p></div><p className="det221box2">Yes</p></div>
          <div className="det221box"><div className="det221box1"><p >Language</p></div><p className="det221box2">English</p></div>
          <div className="det221box"><div className="det221box1"><p>Access</p></div><p className="det221box2">Lifetime</p></div>
          </div>
          
          <div className="det222">
            <button>Purchase Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdet;
