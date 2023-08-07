// Dependencies
const express = require("express");
const router = express.Router();

const {nodeMailerController} = require("../controller");

router.post("/forget", nodeMailerController.forgetPass);

router.get("/reset-password", nodeMailerController.resetPassword);

router.post("/update-password", nodeMailerController.updatNewPassword);

module.exports = router;
