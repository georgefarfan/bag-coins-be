const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let expanse = new Schema(
    {
        user: {
            type: String
        },
        amount: {
            type: Number
        },
        name: {
            type: String
        },
        date: {
            type: String
        },
        type: {
            type: String
        },
        description: {
            type: String
        }
    }
);

module.exports = mongoose.model("expenses", expanse);