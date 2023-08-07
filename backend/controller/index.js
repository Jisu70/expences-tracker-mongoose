// Import the route files
const userController = require('./user.controller');
const expensesController = require('./expenses.controller');
const paymentController = require('./razorpay.controller');
const nodeMailerController = require('./nodeMailer.controller');

// Export all the routes
module.exports = {
  userController,
  expensesController,
  paymentController,
  nodeMailerController,
};
