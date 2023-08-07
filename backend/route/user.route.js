const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const {userController} = require('../controller');
// To save the userdata
router.post('/savedata', [
  body('name').isLength({ min : 4}),
  body('email').isEmail(),
  body('email').isLength({ min : 5})
], userController.saveData);
// login 
router.post('/login', userController.loginUser);

module.exports = router;
