import React from "react";
import "./Courses.css";
import { useState } from "react";

const Courses = () => {
  const [activeButton, setActiveButton] = useState("all");
  const [all, setAll] = useState("all");
  const [kindergarten, setKindergarten] = useState(true);
  const [highschool, setHighschool] = useState(true);
  const [college, setCollege] = useState(true);
  const [tech, setTech] = useState(true);

  return (
    <div className="Courses">
      <div className="topshop1">
        Home | <span className="toppp">Courses</span>
      </div>
      <div className="patoo">
        <img src="src/assets/pato.png" alt="" />
      </div>
      <div className="topCourses">
        <div className="topjoin10">
          <p>Eduvi Courses For All Standards</p>
        </div>
        <div className="topjoin20">
          {" "}
          <img src="src/assets/pc.png" alt="" />
        </div>
      </div>
      <div className="botati">
        <button
          onClick={() => {
            setActiveButton("all");
            setCollege(true);
            setHighschool(true);
            setKindergarten(true);
            setTech(true);
          }}
          className={activeButton === "all" ? "boti" : "bota"}
        >
          All Books
        </button>
        <button
          onClick={() => {
            setActiveButton("kindergarten");
            setCollege(false);
            setHighschool(false);
            setKindergarten(true);
            setTech(false);
          }}
          className={activeButton === "kindergarten" ? "boti" : "bota"}
        >
          Kindergarten
        </button>
        <button
          onClick={() => {
            setActiveButton("highschool");
            setCollege(false);
            setHighschool(true);
            setKindergarten(false);
            setTech(false);
          }}
          className={activeButton === "highschool" ? "boti" : "bota"}
        >
          High School
        </button>
        <button
          onClick={() => {
            setActiveButton("college");
            setCollege(true);
            setHighschool(false);
            setKindergarten(false);
            setTech(false);
          }}
          className={activeButton === "college" ? "boti" : "bota"}
        >
          College
        </button>
        <button
          onClick={() => {
            setActiveButton("tech");
            setCollege(false);
            setHighschool(false);
            setKindergarten(false);
            setTech(true);
          }}
          className={activeButton === "tech" ? "boti" : "bota"}
        >
          Technology
        </button>
      </div>
      <div className="cora">
        {kindergarten && (
          <>
            <div className="corabox">1</div>
          </>
        )}

        {highschool && (
          <>
            <div className="corabox">2</div>
            <div className="corabox">2</div>
          </>
        )}
        {college && (
          <>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
            <div className="corabox">3</div>
          </>
        )}
        {tech && (
          <>
            <div className="corabox">
              
               <img src="src/assets/ht.png" alt="" /> 
              <div className="corabox2">
                <p>HTML</p>
              </div>
              <div className="corabox3">
                <p>
                  HTML is the standard language used
                  to create and design webpages.
                </p>
              </div>
              <button>Class Details</button>
            </div>

            <div className="corabox">4</div>
            <div className="corabox">4</div>
            <div className="corabox">4</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
