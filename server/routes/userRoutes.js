const express = require('express');
const router = express.Router();
const { registerUser, getUsers } = require('../controllers/userController');

// user register 
router.post('/register', registerUser);
router.get('/', getUsers);

module.exports = router;
