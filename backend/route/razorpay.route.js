// Dependencies
const express = require("express");
const router = express.Router();
const {paymentController} = require("../controller");
const checkLogin = require("../middleware/checkLogin");

// This rout helps to create order
router.post("/checkout", checkLogin, paymentController.checkout);
// This rout is going to verify the payment
router.post("/verify", checkLogin, paymentController.verifyPayment);
// This rout send the razorpay api token
router.get("/key", paymentController.getKey);

module.exports = router;
