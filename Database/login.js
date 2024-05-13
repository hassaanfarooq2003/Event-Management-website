const express = require('express');
const router = express.Router();
const { User } = require('./Schema');

// Login route
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found or password is incorrect, return an error
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Store the user data in the local storage
    const userData = {
      userId: user.userId,
      name: user.name,
      email: user.email
    };
    res.json({ message: 'Login successful', user: userData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;