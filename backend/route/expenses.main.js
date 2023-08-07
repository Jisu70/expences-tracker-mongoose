 // Dependencies
const express = require("express");

const router = express.Router();

const { expensesController } = require('../controller/');

const checkLogin = require('../middleware/checkLogin.js')

//  
router.get("/total-expenses", checkLogin, expensesController.totalExpenses);

router.post("/savedata", checkLogin, expensesController.saveData);

router.get("/all-expenses", checkLogin, expensesController.allExpenses);

router.put("/update-expenses", expensesController.updateExpenses);

router.delete("/delete-expenses", expensesController.deleteExpenses);

router.get("/single-user/", checkLogin, expensesController.findUser);

// To show everyone total expences 
router.get("/lead-board", expensesController.allUserTotalExpenses);
// check the user is premium or not
router.get("/is-premium", checkLogin, expensesController.isPremium);
//
router.get("/perusertotal", expensesController.perUserTotal);
// 
router.get("/month", expensesController.getExpensesByMonthAndDate);
// Download exp
router.get("/download", checkLogin, expensesController.downloadExpenses);
// All download links of a user
router.get("/alllinks", checkLogin, expensesController.usersAllExpenseslink);

// For pagination 
router.get("/pagination", checkLogin, expensesController.pagination);

module.exports = router;
