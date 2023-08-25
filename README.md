# Expenses Tracker with MongoDB and Mongoose

## Introduction
Expenses Tracker is a full-stack web application developed using Node.js and MongoDB with the help of Mongoose. It provides users with a way to keep track of their expenses in an organized manner. The application includes features like user authentication (signup, login, password recovery), a payment system integrated with Razorpay, and an API for smooth communication between the frontend and backend. The project also utilizes Mongoose, an ODM (Object Data Modeling) library, to interact with the MongoDB database. The frontend design is enhanced with the use of Bootstrap for a user-friendly interface.

## Features
- User Authentication:
  - Signup: Users can create new accounts by providing their information.
  - Login: Existing users can securely log into their accounts.
  - Password Recovery: Users can reset their passwords if forgotten.

- Expense Tracking:
  - Create Expenses: Users can add new expense records, including amount, category, and date.
  - View Expenses: Users can see a list of their expenses, categorized by date and type.
  - Edit/Remove Expenses: Users can edit or delete individual expense records.

- Payment Integration:
  - Razorpay: Users can make secure payments using the Razorpay payment gateway.

- API Usage:
  - Backend API: The application provides API endpoints for communication between the frontend and backend.

- Database:
  - MongoDB: The application uses MongoDB to store and manage expense records.

- Object Data Modeling:
  - Mongoose: Mongoose simplifies interaction with the MongoDB database by providing a structured way to work with data.

- Pagination:
  - Efficient Data Handling: The application implements pagination for effective management of large amounts of data.

- Frontend Design:
  - Bootstrap: The frontend is styled using the Bootstrap framework, ensuring a visually appealing and responsive design.

## Prerequisites
- Node.js installed on your computer
- MongoDB server installed and running
- Razorpay account for payment integration

## Installation
1. Clone the repository: `git clone https://github.com/your_username/expenses-tracker.git`
2. Go to the project folder: `cd expenses-tracker`
3. Install dependencies: `npm install`

## Configuration
1. Create a new MongoDB database for the application.
2. Rename the `.env.example` file to `.env`.
3. Open the `.env` file and update the following configurations:
   - `DB_CONNECTION_STRING`: Set the MongoDB connection string.
   - `RAZORPAY_KEY_ID`: Set your Razorpay key ID.
   - `RAZORPAY_KEY_SECRET`: Set your Razorpay key secret.

## Usage
1. Start the server: `npm start`
2. Open your web browser and go to `http://localhost:3000` to access the application.

## API Documentation
The application offers the following API endpoints for integration with other systems:

- **GET** `/api/expenses` - Retrieve a list of all expenses.
- **GET** `/api/expenses/:id` - Retrieve a specific expense by its ID.
- **POST** `/api/expenses` - Create a new expense.
- **PUT** `/api/expenses/:id` - Update an existing expense using its ID.
- **DELETE** `/api/expenses/:id` - Delete an expense using its ID.

## Contributing
Contributions are welcome! To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make and commit your changes: `git commit -m 'Add some feature'`.
4. Push changes to your forked repository: `git push origin my-feature-branch`.
5. Submit a pull request describing your changes.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Razorpay](https://razorpay.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bootstrap](https://getbootstrap.com/)

## Contact
For questions or suggestions, contact the project maintainer at (mailto:sudiptajana70@gmail.com).
