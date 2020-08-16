const express = require("express");
const app = express();
const expanses = require("./models/expanse");
const router = express.Router();
const port = 4000;
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/moneyback";
const bodyParser = require("body-parser");

// MONGODB
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

router.route("/addExpense").post(function (req, res) {
    console.log("REQ => ", req.body);
    let expense = {
        user: req.body.user,
        amount: req.body.amount,
        name: req.body.name,
        date: req.body.date,
        type: req.body.type,
        description: req.body.description
    };
    expanses.insertMany(expense, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.route("/list").get(function (req, res) {
    expanses.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.route("/filter").get(function (req, res) {
    expanses.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.use("/", router);

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});
