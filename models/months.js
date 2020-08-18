const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const Expense = require("./expanse");

let expanse = new Schema({
  user: {
    type: User,
  },
  expenses: {
    type: Array,
  },
});

module.exports = mongoose.model("expenses", expanse);
