// Dependencies
const { Expense } = require("../model");
const User = require("../model/user.model");
const { uploadToS3 } = require("../services/s3services");
const { Urltable } = require('../model/index')

// To save the Expenses in the database
const saveData = async (req, res) => {
  try {
    const userId = req.userId;
    const item = req.body.item;
    const amount = req.body.amount;
    const category = req.body.category;

    const result = await Expense.create({
      item: item,
      amount: amount,
      category: category,
      userId: userId,
    });

    res.status(200).json({ message: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

// To get all the expenses
const allExpenses = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("userId :", userId);
    let result = await Expense.find({ userId: userId });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
};

// TO fetch all the expenses
const allUserTotalExpenses = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json({ result: response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error fetching Expenses" });
  }
};

// To edit or update the expenses
const updateExpenses = async (req, res) => {
  const userId = req.body.id;
  const updatedItem = req.body.item;
  const updatedAmount = req.body.amount;
  const updatedCategory = req.body.category;
  try {
    const result = await Expense.findById(userId);
    if (result) {
      result.item = updatedItem;
      result.amount = updatedAmount;
      result.category = updatedCategory;
      await result.save();
      res.status(200).json({ message: "Expenses updated successfully." });
    } else {
      throw new Error("Cannot edit");
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

// To calculate the total expenses
const totalExpenses = async (req, res) => {
  try {
    const result = await Expense.find({ userId: req.userId });
    if (result) {
      res.status(200).json({ result: result });
    } else {
      res.status(404).json({ error: "Expenses not found for the provided user ID." });
    }
  }
  catch (err) {
    console.error("Error fetching expenses:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};

// To find the user by their ID
const findUser = (req, res) => {
  const id = req.userId;
  User.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

// To delete the expenses
const deleteExpenses = async (req, res) => {
  const id = req.body.id;
  console.log("Id of expense",id)
  try {
    const expense = await Expense.findById(id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found." });
    }
    await expense.deleteOne();
    console.log("Item DESTROYED");
    res.json({ message: "Item deleted successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred." });
  }
};

// Is user premium
const isPremium = async (req, res) => {
  let id = req.userId;
  try {
    const result = await User.findById(id).select('isPremium');
    console.log(result);
    res.status(200).json({ result: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};


// 
const perUserTotal = async (req, res) => {
  try {
    // Groupby technique
    const expenses = await Expense.aggregate([
      {
        $group: {
          _id: "$userId",
          total_cost: { $sum: "$amount" }
        }
      }
    ]);
    res.send(expenses);
  } catch (error) {
    console.error("Error retrieving expenses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to fetch expenses month-wise and date-wise
const getExpensesByMonthAndDate = async (req, res) => {
  console.log("i called");
  try {
    const expenses = await Expense.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
          date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          amount: 1
        }
      },
      {
        $group: {
          _id: {
            month: "$month",
            date: "$date"
          },
          totalamount: { $sum: "$amount" }
        }
      }
    ]);
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error retrieving expenses:", error);
    throw error;
  }
};
//

const downloadExpenses = async (req, res) => {
  try {
    const id = req.userId;
    const result = await Expense.find({ userId: id });
    const stringifyResult = JSON.stringify(result);
    const fileName = `Expense${new Date()}.txt`;
    const url = await uploadToS3(stringifyResult, fileName);
    console.log(url);
    const response = await Urltable.create({
      url: url,
      userId: id
    });
    console.log(response);
    res.status(200).json({ success: true, URL: url });
  } catch (error) {
    res.status(500).json({ error });
  }
};


const usersAllExpenseslink = async (req, res) => {
  try {
    const id = req.userId;
    const result = await Urltable.find({ userId: id });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const pagination = async (req, res) => {
  try {
    const id = req.userId;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    // Fetch the data from the database with pagination
    const result = await Expense.find({ userId: id }).skip(offset).limit(limit);
    const totalCount = await Expense.countDocuments({ userId: id });

    res.status(200).json({ result, totalCount });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  saveData,
  allExpenses,
  allUserTotalExpenses,
  updateExpenses,
  totalExpenses,
  deleteExpenses,
  isPremium,
  perUserTotal,
  getExpensesByMonthAndDate,
  downloadExpenses,
  findUser,
  usersAllExpenseslink,
  pagination
};
