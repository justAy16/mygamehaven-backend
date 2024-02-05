import express from 'express';
import User from '../models/user.js';

const UserRoute = express.Router();

// Get all users
UserRoute.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default UserRoute;