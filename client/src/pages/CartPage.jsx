// eslint-disable-next-line react/prop-types
function CartPage({ cart, updateQuantity, removeFromCart }) {
  const handleQuantityChange = (carId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(carId);
    } else {
      updateQuantity(carId, newQuantity);
    }
  };

  return (
    <div className='container'>
      <h1>Your Shopping Cart</h1>
      {/* eslint-disable-next-line react/prop-types */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='cart-items'>
          {/* eslint-disable-next-line react/prop-types */}
          {cart.map((item) => (
            <div key={item._id} className='cart-item'>
              <img
                src={item.imageUrl}
                alt={`${item.make} ${item.model}`}
                className='cart-image'
              />
              <div className='cart-details'>
                <h2>
                  {item.make} {item.model}
                </h2>
                <p>Price: ${item.price}</p>
                <div className='quantity-control'>
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>Total: ${item.totalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
