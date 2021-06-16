const RazorPay = require("razorpay");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");

dotenv.config();

var instance = new RazorPay({
  key_id: process.env.KEYID,
  key_secret: process.env.KEYSECRET,
});

const generatePay = (req, res) => {
  const paymentAmount = req.body.paymentAmount * 100;
  const options = {
    amount: paymentAmount,
    currency: "INR",
    receipt: uuidv4(),
    payment_capture: 1,
  };

  instance.orders.create(options, (err, order) => {
    if (err) {
      return res.status(400).json({
        message: "An error occurred : " + err.message,
      });
    }

    return res.json(order);
  });
};

module.exports = { generatePay };
