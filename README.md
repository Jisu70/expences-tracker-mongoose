# Expenses Tracker

## Introduction
Expenses Tracker is a full-stack web application developed using Node.js and MySQL. It provides users with the ability to track and manage their expenses in a convenient and organized manner. The application includes features such as user authentication (signup, login, forget password), a payment interface with Razorpay integration, and an API implementation for seamless communication between the frontend and backend. The project also utilizes ORM Sequelize for database querying, pagination for efficient data handling, and Bootstrap for a visually appealing user interface.

## Features
- User Authentication:
  - Signup: Users can create new accounts by providing necessary information.
  - Login: Existing users can securely log into their accounts.
  - Forgot Password: Users can reset their passwords by following the password recovery process.

- Expense Tracking:
  - Create Expenses: Users can add new expense records with details such as amount, category, and date.
  - View Expenses: Users can see a list of their expenses, organized by date and category.
  - Edit/Remove Expenses: Users have the ability to edit or delete individual expense records.

- Payment Integration:
  - Razorpay: Users can make payments securely using the Razorpay payment gateway.

- API Implementation:
  - Backend API: The application provides a set of API endpoints for seamless communication between the frontend and backend.

- Database:
  - MySQL: The application uses MySQL as the database to store and manage expense records.

- ORM and Querying:
  - Sequelize: ORM Sequelize is used for simplified database querying and interaction.

- Pagination:
  - Efficient Data Handling: The application implements pagination to handle large amounts of expense data effectively.

- Frontend Design:
  - Bootstrap: The frontend is designed using the Bootstrap framework, ensuring a visually appealing and responsive user interface.

## Prerequisites
- Node.js installed on your system
- MySQL server installed and running
- Razorpay account for payment integration

## Installation
1. Clone the repository: `git clone https://github.com/your_username/expenses-tracker.git`
2. Navigate to the project directory: `cd expenses-tracker`
3. Install dependencies: `npm install`

## Configuration
1. Create a new MySQL database for the application.
2. Rename the `.env.example` file to `.env`.
3. Open the `.env` file and update the following configurations:
   - `DB_HOST`: Set the MySQL database host.
   - `DB_PORT`: Set the MySQL database port.
   - `DB_NAME`: Set the name of the MySQL database you created.
   - `DB_USERNAME`: Set the MySQL database username.
   - `DB_PASSWORD`: Set the MySQL database password.
   - `RAZORPAY_KEY_ID`: Set your Razorpay key ID.
   - `RAZORPAY_KEY_SECRET`: Set your Razorpay key secret.

## Usage
1. Start the server: `npm start`
2. Open your web browser and visit `http://localhost:3000` to access the application.

## API Documentation
The application provides the following API endpoints for integration with other systems:

- **GET** `/api/expenses` - Get a list of all expenses.
- **GET** `/api/expenses/:id` - Get a specific expense by its ID.
- **POST** `/api/expenses` - Create a new expense.
- **PUT** `/api/expenses/:id` - Update an existing expense by its ID.
- **DELETE** `/api/expenses/:id` - Delete an expense by its ID.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and

 commit them: `git commit -m 'Add some feature'`.
4. Push the changes to your forked repository: `git push origin my-feature-branch`.
5. Submit a pull request detailing the changes you made.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Razorpay](https://razorpay.com/)
- [Sequelize](https://sequelize.org/)
- [Bootstrap](https://getbootstrap.com/)

## Contact
If you have any questions or suggestions, feel free to reach out to the project maintainer at (mailto:sudiptajana70@gmail.com).