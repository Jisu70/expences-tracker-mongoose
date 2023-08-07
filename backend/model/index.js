const Expense = require("./expenses.model");
const User = require("./user.model");
const Order = require("./order.model");
const PasswordTable = require('./forgetPassRequest')
const Urltable = require('./url.model')


module.exports = { Expense, User, Order, PasswordTable, Urltable };
