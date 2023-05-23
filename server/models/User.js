import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profiles: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  lfgposts: [{ type: mongoose.Schema.Types.ObjectId, ref: "LFGPost" }],
  picture: { type: String, required: false },
});

const User = mongoose.model("User", UserSchema);
export default User;
