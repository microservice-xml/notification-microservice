const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const hostNotificationRoutes = require("./routes/hostNotification");
const guestNotificationRoutes = require("./routes/guestNotification");

mongoose.connect(
  "mongodb+srv://gravarica:mongodb123@xws-cluster.3wfy8qe.mongodb.net/NotificationDb?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/host-notification", hostNotificationRoutes);
app.use("/guest-notification", guestNotificationRoutes);

module.exports = app;
