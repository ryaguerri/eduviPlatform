import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="header">
        {/* <div className="hi1"><img src="src/assets/hi1.png" alt="ee" /></div> */}
        {/* <div className="hi2"><img src="src/assets/hi2.png" alt="ee" /></div>
        <div className="hi3"><img src="src/assets/hi3.png" alt="ee" /></div>
        <div className="hi4"><img src="src/assets/hi4.png" alt="ee" /></div> */}
        <div className="headerleft">
          <div className="headerleft1">Never Stop Learning</div>
          <div className="headerleft2">
            <p>Grow up your skills by online courses with Eduvi</p>
          </div>
          <div className="headerleft3">
            <p>
              Eduvi is a Global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the barriers togetting a degree.
            </p>
          </div>
          <div className="headerleft4"></div>
        </div>
        <div className="headerright">
          <div className="hi1">
            <img src="src/assets/hi1.png" alt="ee" />
          </div>
          <div className="hi2">
            <img src="src/assets/hi2.png" alt="ee" />
          </div>
          <div className="hi3">
            <img src="src/assets/hi3.png" alt="ee" />
          </div>
          <div className="hi4">
            <img src="src/assets/hi4.png" alt="ee" />
          </div>{" "}
          <div className="headerrightimage">
            {" "}
            <img src="src/assets/child.png" alt="ee" />
          </div>
        </div>
      </div>
      <div className="classes">
        <div className="girl">
          <img src="src/assets/girl.png" alt="ee" />
        </div>
        <div className="call">
          <img src="src/assets/call.png" alt="ee" />
        </div>
        <div className="arrow">
          <img src="src/assets/arrow.png" alt="ee" />
        </div>
        <div className="patt">
          <img src="src/assets/patt.png" alt="ee" />
        </div>
        <div className="classes1">
          <p className="classes11">High quality video, audio & live classes</p>
          <p className="classes12">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than 480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </p>
           
          <button onClick={() => navigate("/Courses")}>Visit Courses</button>
        </div>{" "}
        <div className="classes2">
          <img src="src/assets/teacher.png" alt="ee" />
        </div>
        <div className="classes3">
          <button>
            <img src="src/assets/icon1.png" alt="ee" />
            Audio Classes
          </button>
          <button>
            <img src="src/assets/icon2.png" alt="ee" />
            Live Classes
          </button>
          <button>
            <img src="src/assets/icon3.png" alt="ee" />
            Recorded Class
          </button>
        </div>
      </div>
      {/* <div className="lessons">
        <div className="lessons1">
          <p>Qualified lessons for students</p>
        </div>
        <div className="lessons2">
          <p>
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </p>
        </div>
        <div className="lessons3">
          <button>Kindergarten</button>
          <button>High School</button>
          <button>College</button>
        </div>
        <div className="lessons4"></div>
        <div className="lessons5">
        <button onClick={() => navigate("/Courses")}>Visit More Classes</button> </div>
      </div> */}
      <div className="joincourses">
        <div className="joincourses1">
          <div className="col">
            <p>College Level</p>
          </div>
          <div className="covid">
            <p>Don’t waste time in COVID-19 pandemic. Develop your skills.</p>
          </div>
          <div className="dif">
            <p>
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
          </div>
          <button onClick={() => navigate("/Register")}>Registation Now</button>
           
        </div>
        <div className="joincourses2">
          <div className="patt1">
            <img src="src/assets/patt1.png" alt="ee" />
          </div>
          <div className="html">
            {" "}
            <img src="src/assets/html.png" alt="ee" />
          </div>
          <div className="php">
            {" "}
            <img src="src/assets/php.png" alt="ee" />
          </div>
          <div className="java">
            {" "}
            <img src="src/assets/java.png" alt="ee" />
          </div>
          <img src="src/assets/khbach.png" alt="ee" />
        </div>
      </div>
      <div className="jointeacher">
        <div className="jointeacherimage">
          <img src="src/assets/teat.png" alt="ee" />
        </div>
        <div className="jointeacherpara">
          <div className="jointeacherpara1">
            {" "}
            <p className="want">
              Want to share your knowledge? Join us a Mentor
            </p>
          </div>
          <div className="jointeacherpara2">
            {" "}
            <p className="high">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized meaning
              for high-definition, generally any video.
            </p>
          </div>
          <button onClick={() => navigate("/Joinasmentor")}>Career Information</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
