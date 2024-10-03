# Car Sale API

## Project Overview

This project is a RESTful API designed to manage a database of cars for sale. It provides endpoints for user authentication and various CRUD operations on the car listings. The API is built with Express.js and uses Mongoose to interact with a MongoDB database. Authentication is handled using JSON Web Tokens (JWT).

## Features

- User registration and authentication
- CRUD operations for car listings
- Secure API endpoints using JWT

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **MongoDB**: A document-based, distributed database.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Getting Started

### Prerequisites

- Node.js
- Docker

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/car-sale-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd car-sale-api
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=mongodb://localhost:27017/car-sale-db
    JWT_SECRET=your_jwt_secret
    ```

### Setting Up MongoDB with Docker

1. Pull the official MongoDB image from Docker Hub:
    ```sh
    docker pull mongo
    ```
2. Run a MongoDB container:
    ```sh
    docker run --name car-sale-mongo -p 27017:27017 -d mongo
    ```
3. Verify that the MongoDB container is running:
    ```sh
    docker ps
    ```

### Starting the Server

1. Start the server:
    ```sh
    npm start
    ```

## Usage

The API provides the following endpoints:

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in an existing user
- `GET /api/cars`: Get a list of all cars
- `POST /api/cars`: Add a new car
- `GET /api/cars/:id`: Get details of a specific car
- `PUT /api/cars/:id`: Update a car's information
- `DELETE /api/cars/:id`: Delete a car
