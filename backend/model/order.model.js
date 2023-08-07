const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  paymentid: String,
  orderid: String,
  status: String,
  // Taking User
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
