import bcrypt from "bcrypt";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export const deleteCourseByEmailAndTitle = async (req, res) => {
  try {
    const { email } = req.params;  // Get email from the URL parameter
    const { title } = req.body;  // Get title from the request body

    if (!email || !title) {
      return res.status(400).json({ message: "Missing email or title parameter" });
    }

    // Normalize the title to lowercase to avoid case sensitivity issues
    const normalizedTitle = title.trim().toLowerCase();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has the course before deleting
    console.log('User Courses before deletion:', user.courses);
    const courseIndex = user.courses.findIndex(course => course.title.trim().toLowerCase() === normalizedTitle);

    if (courseIndex === -1) {
      return res.status(404).json({ message: `Course '${title}' not found for this user` });
    }

    // Remove the course from the user's courses array
    user.courses.splice(courseIndex, 1);

    // Save the updated user document
    await user.save();

    console.log('Updated Courses:', user.courses); // Verify updated data
    res.status(200).json({ message: "Course deleted successfully", courses: user.courses });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};





export const getCoursesByEmail = async (req, res) => {
  try {
    const { email } = req.params; 

    if (!email) {
      return res.status(400).json({ message: "Missing email parameter" });
    }

    // Find user by email and populate courses
    const user = await User.findOne({ email }).select('courses');  
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.courses); // Return user's courses
  } catch (error) {
    console.error("Error retrieving courses:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const addCourseByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Get email from route parameters
    const { title, image } = req.body; // Course details from request body

    // Log the request body to the console
    console.log("Request Body:", req.body);

    if (!email) {
      return res.status(400).json({ message: "Missing email parameter" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add new course to user's courses array
    user.courses.push({ title, image });
    await user.save();

    res.status(200).json({ message: "Course added successfully", courses: user.courses });
  } catch (error) {
    console.error("Error adding course:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteBookByEmailAndTitle = async (req, res) => {
  try {
    const { email } = req.params; // Get email from route parameters
    const { title } = req.body; // Get book title from request body

    if (!email || !title) {
      return res.status(400).json({ message: "Missing email or title parameter" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the index of the book with the given title
    const bookIndex = user.books.findIndex(book => book.title === title);
    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Remove the book from the user's books array
    user.books.splice(bookIndex, 1);
    await user.save();

    res.status(200).json({ message: "Book deleted successfully", books: user.books });
  } catch (error) {
    console.error("Error deleting book:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const getBooksByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Get email from route parameters

    if (!email) {
      return res.status(400).json({ message: "Missing email parameter" });
    }

    // Find user by email and populate books
    const user = await User.findOne({ email }).select('books'); // Only select books field
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.books); // Return user's books
  } catch (error) {
    console.error("Error retrieving books:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const addBookByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Get email from route parameters
    const { image, title, price } = req.body; // Book details from request body

    // Log the request body to the console
    console.log("Request Body:", req.body);

    if (!email) {
      return res.status(400).json({ message: "Missing email parameter" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add new book to user's books array
    user.books.push({ image, title, price });
    await user.save();

    res.status(200).json({ message: "Book added successfully", books: user.books });
  } catch (error) {
    console.error("Error adding book:", error); // Log the error
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



 

 


 
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userEXist = await User.findOne({ email });
    if (!userEXist) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ 
        name,
        email,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).json({ message: " created" });
    } else {
      res.json({ message: "user already exist" });
    }

    //   const user = new User(req.body);
    //   await user.save();
    //   res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" }); 
  
  
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch && email===user.email) {
      return res.status(401).json({ message: "Invalid email or password"  });  

    }
    res.status(200).json({ message: "Login successful" });
    
  } catch (error) {
    
  }





};
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id; 

    
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(userId).select('-password'); 
 // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email; // Use req.params to get route parameters

    if (!email) {
      return res.status(400).json({ message: "Missing email parameter" });
    }

    const user = await User.findOne({ email }).select('-password'); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: "User with that email not found" });
    }

    res.status(200).json(user.name);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
