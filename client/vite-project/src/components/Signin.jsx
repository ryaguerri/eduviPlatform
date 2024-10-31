import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setEmail } from '../features/userSlice'; // Adjust the import path accordingly
import "./register.css";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmailState] = useState(""); // Change name to avoid confusion with action
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const dispatch = useDispatch(); // Initialize useDispatch

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Login the user
      const response = await axios.post("http://localhost:5000/api/login-user", {
        email,
        password,
      });
      console.log("Login response:", response.data);

      // Fetch the user's name after successful login
      const nameResponse = await axios.get(`http://localhost:5000/api/usere/${email}`);
      console.log(nameResponse.data);
      const n = nameResponse.data;

      // Dispatch the email to the Redux store
      dispatch(setEmail(email)); // Dispatch action to set email in store

      // Navigate to Myaccount component
      navigate("/Myaccount", { state: { email } }); 

    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password");
    }
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
            <img src="src/assets/obj.png" alt="" />
          </div>
        </div>
        <div className="bg2"></div>
        <div className="bg33">
          <button className="gog">
            <img src="src/assets/gog.png" alt="ww" />
            Signup with Google
          </button>
          <form onSubmit={handleSubmit} className="bg3q">
            <div className="op">
              <img src="src/assets/hr.png" alt="ww" />
              <div className="sps">Or signup with your email</div>
              <img src="src/assets/hr.png" alt="3w" />
            </div>

            <div className="in">
              <div className="cadna">
                <img src="src/assets/mess.png" alt="" />
              </div>
              <p>Email</p>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmailState(e.target.value)} // Set email state
                type="text"
                placeholder="bill.sanders@example.com"
                required
              />
            </div>
            <div className="in">
              <div className="cadna1">
                <img src="src/assets/cadna.png" alt="" />
              </div>
              <div className="ayn" onClick={togglePasswordVisibility}>
                <img
                  src={showPassword
                    ? "src/assets/eyeopen.png"
                    : "src/assets/ayn.png"
                  }
                  alt=""
                />
              </div>
              <p>Password</p>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                  <p>keep me signed in</p>
                </label>
              </div>
              <div className="keep2">
                <p>Forgot password?</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
