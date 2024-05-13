const express = require('express');
const router = express.Router();
const SchemaController = require('./SchemaController');
const loginRouter = require('./login');
const signupRouter = require('./signup');

// Route to display all users
router.get('/users', SchemaController.displayUsers);

// Route to display all events
router.get('/events', SchemaController.displayEvents);

// Route to insert a new user
router.post('/users', SchemaController.InsertUsers);

// Login and signup routes
router.use('/login', loginRouter);
router.use('/signup', signupRouter);

module.exports = router;