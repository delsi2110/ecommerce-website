const express = require('express');
const router = express.Router();
const { getCars, getCarById } = require('../controllers/carController');

// Routes for car
router.get('/', getCars);
router.get('/:id', getCarById);

// exporting router
module.exports = router;
