const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const configRoutes = require("./routes/config-routes");
const notificationRoutes = require("./routes/notification-routes");

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

app.use("/config", configRoutes);
app.use("/notification", notificationRoutes);

module.exports = app;
