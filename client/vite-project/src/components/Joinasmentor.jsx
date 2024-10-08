import React from "react";
import "./joinasmentor.css";

const Joinasmentor = () => {
  return (
    <div className="join">
      <div className="topshop1">
        Home | <span className="toppp">Become An Instructor</span>
      </div>
      <div className="patt3">
        <img src="src/assets/patt2.png" alt="" />
      </div>
      <div className="topjoin">
        <div className="topjoin1">
          <p>Join Eduvi as a Mentor</p>
        </div>
        <div className="topjoin2">
          {" "}
          <img src="src/assets/topjoin.png" alt="" />
        </div>
      </div>
      <div className="join2">
        <div className="join21">
          {" "}
          <img src="src/assets/male1.svg" alt="" />
        </div>
        <div className="join22">
          <div className="join221">
            <p>Apply As Instructor</p>
          </div>
          <div className="join222">
            <p>
              Teaching is a vital and admirable career. As such, it comes with
              quite a bit of responsibility, both in practice and in preparation
              with many skills required to be a teacher. The following steps
              provide a general breakdown of the requirements for teachers:
            </p>
          </div>
          <div className="join223">
            <div className="join223bot">
              
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Joinasmentor;
