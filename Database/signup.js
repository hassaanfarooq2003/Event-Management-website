const express = require('express');
const router = express.Router();
const { User } = require('./Schema');

// Signup route
router.post('/signup', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user
    const user = new User({
      name,
      email,
      password
    });
    const savedUser = await user.save();

    // Store the user data in the local storage
    const userData = {
      userId: savedUser.userId,
      name: savedUser.name,
      email: savedUser.email
    };
    res.json({ message: 'Signup successful', user: userData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;