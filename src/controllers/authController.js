import jwt from "jsonwebtoken";
import User from "../models/User.js";

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.success({ token }, "User registered successfully");
  } catch (error) {
    res.error(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Invalid username or password");
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.success({ token }, "User logged in successfully");
  } catch (error) {
    res.error(error);
  }
};

export { register, login };
