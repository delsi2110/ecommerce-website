const Cart = require('../models/Cart');

// Get cart by user ID
const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      'items.carId'
    );
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add item to cart
const addItemToCart = async (req, res) => {
  const { userId, carId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [], totalPrice: 0 });
    }

    const carItemIndex = cart.items.findIndex((item) => item.carId == carId);

    if (carItemIndex >= 0) {
      cart.items[carItemIndex].quantity += quantity;
    } else {
      cart.items.push({ carId, quantity });
    }

    const totalPrice = cart.items.reduce(
      (sum, item) => sum + item.quantity * item.carId.price,
      0
    );
    cart.totalPrice = totalPrice;
    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCartByUserId,
  addItemToCart,
};
