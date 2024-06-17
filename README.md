OrderEats
OrderEats is a comprehensive food delivery platform that allows users to browse restaurants, place orders, and track deliveries. The backend is built with Node.js and Express, ensuring robust management of orders, listings, and tracking functionalities. Security is a key focus, with JWT authentication implemented for secure user login and data privacy. The application leverages Mongoose for efficient MongoDB interactions, enabling scalable operations.

Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License
Features
Browse a wide range of restaurants and their menus.
Place food orders easily.
Track order status in real-time.
Secure user authentication with JWT tokens.
Scalable database operations with MongoDB and Mongoose.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Tokens (JWT)
Others: RESTful APIs
Installation
Clone the repository:

shell
Copy code
git clone https://github.com/KunalKapure05/OrderEats.git
cd OrderEats
Install the dependencies:

shell
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following environment variables:
plaintext
Copy code
PORT=3000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the server:

shell
Copy code
npm start
Usage
Ensure MongoDB is running on your local machine or connected through a cloud service.
Start the server using npm start.
Use an API client like Postman to interact with the API endpoints.
API Endpoints
Authentication
Login: POST /api/auth/login
Register: POST /api/auth/register
User
Get User Profile: GET /api/users/profile
Update User Profile: PUT /api/users/profile
Restaurant
Get All Restaurants: GET /api/restaurants
Get Restaurant by ID: GET /api/restaurants/:id
Add New Restaurant: POST /api/restaurants (Admin only)
Update Restaurant: PUT /api/restaurants/:id (Admin only)
Delete Restaurant: DELETE /api/restaurants/:id (Admin only)
Orders
Place Order: POST /api/orders
Get All Orders: GET /api/orders (Admin only)
Get Order by ID: GET /api/orders/:id
Update Order Status: PUT /api/orders/:id (Admin only)
Contributing
Fork the repository.
Create a new feature branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
