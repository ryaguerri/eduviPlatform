import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send user data to the backend
      const response = await axios.post("http://localhost:5000/api/create-user", {
        name,
        email,
        password,
      });
      console.log(response.data); // Log the response from the server
      // Navigate to the Signin page or another page after successful signup
      navigate("/Myaccount", { state: { email } }); 
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error creating user: " + (error.response.data.message || "Please try again."));
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
          <form onSubmit={handleSubmit} className="bg3">
            <div className="op">
              <img src="src/assets/hr.png" alt="ww" />
              <div className="sps">Or signup with your email</div>
              <img src="src/assets/hr.png" alt="3w" />
            </div>
            <div className="in">
              <p>Full name</p>
              <div className="cadna">
                <img src="src/assets/acc.png" alt="" />
              </div>
              <input
                type="text"
                placeholder="Esther Howard"
                required
                value={name}
                onChange={(e) => setName(e.target.value)} // Capture full name
              />
            </div>
            <div className="in">
              <div className="cadna">
                <img src="src/assets/mess.png" alt="" />
              </div>
              <p>Email</p>
              <input
                type="text"
                placeholder="bill.sanders@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Capture email
              />
            </div>
            <div className="in">
              <div className="cadna1">
                <img src="src/assets/cadna.png" alt="" />
              </div>
              <div className="ayn" onClick={togglePasswordVisibility}>
                <img
                  src={
                    showPassword
                      ? "src/assets/eyeopen.png"
                      : "src/assets/ayn.png"
                  }
                  alt=""
                />
              </div>
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Capture password
              />
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" required />{" "}
                <p>
                  I agreed to the <span>Terms & Conditions</span>
                </p>
              </label>
            </div>

            <button type="submit" className="up">
              Sign Up
            </button>
            <div className="alr">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/signin">Sign in</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
