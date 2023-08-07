// const Sequelize = require('sequelize');
// const sequelize = require('../config/database');

// const ResetPasswordRequest = sequelize.define('ForgotPasswordRequests', {
//   id: {
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV4,
//     primaryKey: true,
//   },
//   isActive: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: true,
//   },
// });

// module.exports = ResetPasswordRequest;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const resetPasswordRequestSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const ResetPasswordRequest = mongoose.model(
  "ResetPasswordRequest",
  resetPasswordRequestSchema
);

module.exports = ResetPasswordRequest;
