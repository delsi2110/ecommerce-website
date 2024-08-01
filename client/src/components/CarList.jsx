import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CarList({ cars, addToCart }) {
  return (
    <div className='car-list'>
      {/* eslint-disable-next-line react/prop-types */}
      {cars.map((car) => (
        <div key={car._id} className='car-item'>
          <img
            src={car.imageUrl}
            alt={`${car.make} ${car.model}`}
            className='car-image'
          />
          <h2>
            {car.make} {car.model}
          </h2>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
          <Link to={`/car/${car._id}`}>View Details</Link>
          <button onClick={() => addToCart(car)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CarList;
