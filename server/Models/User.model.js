import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  books: [
    {
      image: { type: String, required: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  courses: [
    {
      title: { type: String, required: true },
      image: { type: String },
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
