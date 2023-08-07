// Import the route files
const userRouter = require('./user.route');
const expenseRouter = require('./expenses.main');
const paymentRouter = require('./razorpay.route');
const nodeMailerRoute = require('./nodeMailer');

// Export all the routes
module.exports = {
  userRouter,
  expenseRouter,
  paymentRouter,
  nodeMailerRoute,
};
