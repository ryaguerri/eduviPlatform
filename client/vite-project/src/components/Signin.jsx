import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register">
      <div className="bg">
        <div className="bg1">
          <div className="bg11">
            <img src="src/assets/image.png" alt="" />
            <p>Eduvi</p>
          </div>
          <div className="bg12">
            <p>
              Welcome to <br /> Eduvi Online <br /> Learning Platform
            </p>
          </div>
          <div className="bg13">
            {" "}
            <img src="src/assets/obj.png" alt="" />
          </div>
        </div>
        <div className="bg2"></div>
        <div className="bg33">
          <button className="gog">
            {" "}
            <img src="src/assets/gog.png" alt="ww" />
            Signup with google
          </button>
          <form action="" className="bg3q">
            <div className="op">
              <img src="src/assets/hr.png" alt="ww" />
              <div className="sps">Or signup with your email</div>
              <img src="src/assets/hr.png" alt="3w" />
            </div>

            <div className="in">
              <div className="cadna">
                {" "}
                <img src="src/assets/mess.png" alt="" />
              </div>
              <p>Email</p>
              <input
                type="text"
                placeholder="bill.sanders@example.com"
                required
              />
            </div>
            <div className="in">
              <div className="cadna1">
                {" "}
                <img src="src/assets/cadna.png" alt="" />
              </div>
              <div className="ayn" onClick={togglePasswordVisibility}>
                <img
                  src={
                    showPassword
                      ? "src/assets/eyeopen.png" // Icône pour mot de passe visible
                      : "src/assets/ayn.png" // Icône pour mot de passe caché
                  }
                  alt=""
                />
              </div>
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                required
              />
            </div>

            <button type="submit" className="up">
              Sign In
            </button>
            <div className="keep">
              <div className="keep1">
                <label>
                  <input type="checkbox" name="" id="" />{" "}
                  <p>
                  keep me signed in
                  </p>
                </label>
              </div>
              <div className="keep2"><p>Forgot password?</p></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
