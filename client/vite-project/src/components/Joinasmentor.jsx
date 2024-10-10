import React, { useState } from "react";
import "./joinasmentor.css";

const Joinasmentor = () => {
  const [activeTab, setActiveTab] = useState("requirements");

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
            <div className="tabs">
              <span
                className={
                  activeTab === "requirements" ? "active-tab" : "noactive-tab"
                }
                onClick={() => setActiveTab("requirements")}
              >
                Instructor Requirements
              </span>
              <span
                className={
                  activeTab === "rules" ? "active-tab" : "noactive-tab"
                }
                onClick={() => setActiveTab("rules")}
              >
                Instructor Rules
              </span>
            </div>

            {activeTab === "requirements" && (
              <ul className="requirements-list">
                <li>An undergraduate degree</li>
                <li>Participate in supervised teaching</li>
                <li>State teaching license</li>
                <li>Pursue graduate studies</li>
              </ul>
            )}

            {activeTab === "rules" && (
              <p className="rules-content">Instructor rules will go here...</p>
            )}
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      <div className="join3">
      <img src="src/assets/batata.png" alt="" />
        <div className="join31"><p>How to apply to join as instructor</p></div>
        <div className="join32"></div>
      </div>
    </div>
  );
};

export default Joinasmentor;
