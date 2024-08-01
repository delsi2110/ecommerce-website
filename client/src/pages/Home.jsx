import { useState } from 'react';
import CarList from '../components/CarList';

const dummyCars = [
  {
    _id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 25000,
    imageUrl: '/images/car1.jpg',
  },
  {
    _id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 20000,
    imageUrl: '/images/car1.jpg',
  },
  {
    _id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 30000,
    imageUrl: '/images/car1.jpg',
  },
  {
    _id: 4,
    make: 'Chevrolet',
    model: 'Impala',
    year: 2018,
    price: 18000,
    imageUrl: '/images/car1.jpg',
  },
  {
    _id: 5,
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 55000,
    imageUrl: '/images/car1.jpg',
  },
];

function Home() {
  const [cars] = useState(dummyCars);

  return (
    <div className='container'>
      <h1>Car Listings</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default Home;
