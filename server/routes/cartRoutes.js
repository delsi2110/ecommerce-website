const express = require('express');
const router = express.Router();
const {
  getCartByUserId,
  addItemToCart,
} = require('../controllers/cartController');

router.get('/:userId', getCartByUserId);
router.post('/', addItemToCart);

module.exports = router;
