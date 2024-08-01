import { useParams } from 'react-router-dom';

const dummyCars = [
  {
    _id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 25000,
    mileage: 15000,
    color: 'White',
    description: 'A reliable and comfortable sedan.',
  },
  {
    _id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 20000,
    mileage: 20000,
    color: 'Black',
    description: 'A compact car with excellent fuel efficiency.',
  },
  {
    _id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 30000,
    mileage: 5000,
    color: 'Red',
    description: 'A classic American muscle car.',
  },
];

// eslint-disable-next-line react/prop-types
function CarPage({ addToCart }) {
  const { id } = useParams();
  const car = dummyCars.find((c) => c._id === parseInt(id));

  if (!car) {
    return <div className='container'>Car not found</div>;
  }

  return (
    <div className='container'>
      <div className='car-details'>
        <img
          src={'/images/car1.jpg'}
          alt={`${car.make} ${car.model}`}
          className='car-image'
        />
        <h1>
          {car.make} {car.model}
        </h1>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price}</p>
        <p>Mileage: {car.mileage} miles</p>
        <p>Color: {car.color}</p>
        <p>{car.description}</p>
        <button className='add-to-cart' onClick={() => addToCart(car)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CarPage;
