# E-Commerce Project

**Student Name**: Delsi Bharatbhai Patel  
**Student Number**: 8981551  
**Date**: 19/07/2023

<hr/>

(REPOSITORY LINK) [https://github.com/delsi2110/ecommerce-website]

<hr/>

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

<hr/>

### How to Run Project

*Frontend:* 
```cd client
    npm run dev
  ```

  *Backend:*
  ```cd server
    node index.js
  ```



<hr/>

### Database Schema Design

**Cars Schema (MongoDB)**

- `make`: String
- `model`: String
- `year`: Number
- `price`: Number
- `category`: String (e.g., Sedan, SUV, Truck)
- `mileage`: Number
- `color`: String
- `description`: String
- `stock`: Number
- `imageUrl`: [String]

**Users Schema (MongoDB)**

- `firstName`: String
- `lastName`: String
- `username`: String
- `password`: String
- `email`: String
- `address`: String

**Cart Schema (MongoDB)**

- `userId`: ObjectId (refers to Users)
- `items`: [
  {
  `carId`: ObjectId (refers to Cars),
  `quantity`: Number
  }
  ]
- `totalPrice`: Number
- `createdAt`: Date
- `updatedAt`: Date
