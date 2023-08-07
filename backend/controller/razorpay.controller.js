// Dependencies
const razorpay = require("razorpay");
require("dotenv").config();
const crypto = require("crypto");
const Order = require("../model/order.model");
const User = require("../model/user.model");
const paymentMessage = require("../views/paymentSuccessfull");

// Instance
const razorInstance = new razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// For create Order
const checkout = async (req, res) => {
  const userId = req.userId;
  const options = {
    amount: 25 * 100,
    currency: "INR",
  };
  try {
    const orderDetails = await razorInstance.orders.create(options);
    console.log("generated Order details : ", orderDetails);
    // Insert the order details to the database
    await Order.create({
      paymentid: null,
      orderid: orderDetails.id,
      status: "pending",
      userId, // Assuming the user ID is stored in `req.userId` from authentication middleware.
    });
    return res.status(200).json({ success: true, details: orderDetails });
  } catch (error) {
    return res.status(500).json({
      message: "Error generating orderID: " + error,
    });
  }
};

// For Verify the payment details
const verifyPayment = async (req, res) => {
  try {
    console.log(req.body);
    const userId = req.userId;
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);

    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    let generatedSignature = hmac.digest("hex");
    // Checking both signatures are the same or not
    if (razorpay_signature == generatedSignature) {
      // Then updating the payment details in the database
      await Order.updateOne(
        {
          userId,
        },
        {
          paymentid: razorpay_payment_id,
          status: "success",
        }
      );
      await User.updateOne(
        {
          _id: userId,
        },
        {
          isPremium: true,
        }
      );
      res.status(200).send(paymentMessage());
    } else {
      // Payment verification failed
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Payment verification failed" });
  }
};

// It returns the RAZORPAY_API_KEY
const getKey = (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
};

// Exporting the model
module.exports = {
  checkout,
  verifyPayment,
  getKey,
};
