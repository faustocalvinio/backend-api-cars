# Backend API Cars

A Node.js RESTful API for managing car data.

## Features

- CRUD operations for cars
- Express.js server
- MongoDB integration (Mongoose)
- JWT authentication

## Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/backend-api-cars.git
cd backend-api-cars
npm install
```

### Configuration

Create a `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsdb
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
npm start
```

## API Endpoints

| Method | Endpoint        | Description         |
|--------|----------------|---------------------|
| GET    | /api/cars      | List all cars       |
| GET    | /api/cars/:id  | Get car by ID       |
| POST   | /api/cars      | Create a new car    |
| PUT    | /api/cars/:id  | Update a car        |
| DELETE | /api/cars/:id  | Delete a car        |

## License

MIT