const express = require("express");
const router = express.Router();

const razorPayController = require("../controllers/razorpay");

router.post("/payment/generate", razorPayController.generatePay);


module.exports = router;
