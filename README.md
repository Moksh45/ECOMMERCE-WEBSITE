# E-commerce Website

Welcome to the E-commerce Website project! This repository contains the source code for a modern, feature-rich e-commerce website built with Node.js, MongoDB, and various other technologies.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a comprehensive e-commerce website designed to provide a seamless shopping experience for users. It includes features such as product browsing, shopping cart management, user authentication, order processing, and more. The backend is built using Node.js and MongoDB, ensuring high performance and scalability.

## Features

- User Authentication (Sign Up, Sign In, Password Reset)
- Product Listing and Search
- Product Details Page
- Shopping Cart
- Order Management
- Payment Integration
- Admin Panel for Product and Order Management
- Responsive Design
- RESTful API

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Moksh45/ECOMMERCE-WEBSITE/
   cd ecommerce-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:5000`.

## Configuration

The application requires several environment variables for configuration. These variables can be set in a `.env` file in the root directory.

- `NODE_ENV`: The environment in which the application is running (e.g., development, production).
- `PORT`: The port number on which the application will run.
- `MONGO_URI`: The connection string for your MongoDB database.
- `JWT_SECRET`: The secret key used for JSON Web Token (JWT) authentication.

## Usage

### Running the Application

To start the application in development mode, use:

```bash
npm run dev
```

To start the application in production mode, use:

```bash
npm start
```

### Admin Panel

The admin panel can be accessed at `http://localhost:5000/admin`. Use the default admin credentials to log in and manage products and orders.

## API Documentation

The API provides various endpoints for interacting with the e-commerce platform. Below is a brief overview of the available endpoints:

- `GET /api/products`: Retrieve a list of products
- `GET /api/products/:id`: Retrieve a specific product by ID
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Log in a user
- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Retrieve a specific order by ID

For detailed API documentation, please refer to the [API Documentation](API_DOCUMENTATION.md) file.

## Contributing

We welcome contributions from the community! If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to reach out:

- **Name**: Moksh gupta
- **Email**: mokshgupt567@gmail.com
