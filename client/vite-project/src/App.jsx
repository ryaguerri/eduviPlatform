import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
 
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Kindergarten from "./components/Kindergarten";
import High from "./components/High";
import College from "./components/College";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import Myaccount from "./components/Myaccount";
import Footer from "./components/Footer";
import Joinasmentor from "./components/Joinasmentor";
import Register from "./components/Register";
import Mentors from "./components/Mentors";
import MentorDetails from './components/MentorDetails';
 
 
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
          
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="Shop" element={<Shop/>}/>
            <Route path="Kindergarten" element={<Kindergarten/>}/>

            <Route path="High" element={<High/>} />
            <Route path="College" element={<College/>} />
            <Route path="Courses" element={<Courses/>} />
            <Route path="Cart" element={<Cart/>} />
            <Route path="High" element={<High/>} />
            <Route path="Myaccount" element={<Myaccount/>} />
            <Route path="Joinasmentor" element={<Joinasmentor />} />
            <Route path="Mentors" element={<Mentors />} />
            <Route path="Register" element={<Register />} />

             
            
          </Route>
        </Routes>
        <Footer/>

         
      </div>
    </>
  );
}

export default App;
