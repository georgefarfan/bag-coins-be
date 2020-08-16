const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        lastName: {
            type: String
        },
        age: {
            type: Number
        }
    }
);

module.exports = mongoose.model("users", user);