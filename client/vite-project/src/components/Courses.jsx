import React from "react";
import "./Courses.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
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
            <div className="corabox">
              <img src="src/assets/wri.jpg" alt="" />
              <div className="corabox2">
                <p>Writing</p>
              </div>
              <div className="corabox3">
                <p>
                  Writing course teaches young children basic writing and
                  communication skills.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/speak.webp" alt="" />
              <div className="corabox2">
                <p>Speaking</p>
              </div>
              <div className="corabox3">
                <p>
                  Writing course teaches young children basic writing and
                  communication skills.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/math.jpg" alt=""  className="math"/>
              <div className="corabox2">
                <p>Math</p>
              </div>
              <div className="corabox3">
                <p>
                Introduction to basic numbers, shapes, and patterns through fun activities.
                </p>
              </div>
              <button>Class Details</button>
            </div>
          </>
        )}

        {highschool && (
          <>
            <div className="corabox">
              <img src="src/assets/pom.jpg" alt=""  className="pom"/>
              <div className="corabox2">
                <p>Science</p>
              </div>
              <div className="corabox3">
                <p>
                Explores biology, chemistry, and physics concepts with hands-on experiments.
                </p>
              </div>
              <button>Class Details</button>
            </div><div className="corabox">
              <img src="src/assets/phy.png" alt="" />
              <div className="corabox2">
                <p> physics</p>
              </div>
              <div className="corabox3">
                <p>
                Studies matter, energy, motion, and fundamental laws of the universe.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/be.png" alt=""  className="usq"/ >
              <div className="corabox2">
                <p>English</p>
              </div>
              <div className="corabox3">
                <p>
                Develops language skills through reading, writing, and communication.
                </p>
              </div>
              <button>Class Details</button>
            </div>
          </>
        )}
        {college && (
          <>
             <div className="corabox">
              <img src="src/assets/his.png" alt=""  className="usq"/ >
              <div className="corabox2">
                <p>History</p>
              </div>
              <div className="corabox3">
                <p>
                History is the study of past events, societies, and their impact today.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/philo.png" alt="" className="math"   / >
              <div className="corabox2">
                <p>Philosophy</p>
              </div>
              <div className="corabox3">
                <p>
                Philosophy explores fundamental questions about existence, knowledge.
                </p>
              </div>
              <button>Class Details</button>
            </div>
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
            </div>

            <div className="corabox">
              <img src="src/assets/cs2.png" alt="" />
              <div className="corabox2">
                <p>CSS</p>
              </div>
              <div className="corabox3">
                <p>
                  CSS is the standard language used to style and layout
                  webpages.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/js.png" alt="" />
              <div className="corabox2">
                <p>JavaScript</p>
              </div>
              <div className="corabox3">
                <p>
                  JavaScript is a high-level language for dynamic web content.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/react.png" alt="" />
              <div className="corabox2">
                <p>React</p>
              </div>
              <div className="corabox3">
                <p>
                  React is a JavaScript library for building user interfaces
                  efficiently.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/ang.png" alt="" />
              <div className="corabox2">
                <p>Angular</p>
              </div>
              <div className="corabox3">
                <p>
                  Angular is a web framework for building dynamic single-page
                  applications.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/mondb.png" alt="" />
              <div className="corabox2">
                <p>MongoDb</p>
              </div>
              <div className="corabox3">
                <p>
                  MongoDB is a NoSQL database for storing and retrieving data.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/git.png" alt="" />
              <div className="corabox2">
                <p>Git</p>
              </div>
              <div className="corabox3">
                <p>
                  Git is a version control system for tracking code changes.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/github.png" alt="" />
              <div className="corabox2">
                <p>GitHub</p>
              </div>
              <div className="corabox3">
                <p>
                  GitHub is a platform for version control and collaborative
                  software development.
                </p>
              </div>
              <button>Class Details</button>
            </div>
            <div className="corabox">
              <img src="src/assets/tail.png" alt="" />
              <div className="corabox2">
                <p>Tailwind</p>
              </div>
              <div className="corabox3">
                <p>
                  Tailwind CSS is a utility-first CSS framework for rapid UI
                  development.
                </p>
              </div>
              <button>Class Details</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
