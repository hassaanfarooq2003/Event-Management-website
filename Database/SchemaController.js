const { User, Event } = require('./Schema');

// Display all users
const displayUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// Display all events
const displayEvents = async (req, res, next) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (err) {
    next(err);
  }
};

const InsertUsers = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    const savedUser = await user.save();
    res.json({
      message: 'User Added Successfully',
      user: savedUser
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { displayUsers, displayEvents, InsertUsers };