const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./user.model");

const expenseSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
// Taking User 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Added post hook
expenseSchema.post("save", async function (doc, next) {
  try {
    const totalAmount = await this.model("Expense")
      .aggregate([
        {
          $match: {
            user: this.user,
          },
        },
        {
          $group: {
            _id: "$user",
            totalAmount: { $sum: { $toInt: "$amount" } },
          },
        },
      ])
      .exec();

    if (totalAmount.length > 0) {
      await User.updateOne(
        { _id: this.user },
        { totalamount: totalAmount[0].totalAmount }
      );
    }
    next();
  } catch (error) {
    console.error("Error updating totalamount:", error);
    next(error);
  }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
