const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const HostNotification = require("../model/HostNotification");

router.get("/", (req, res, next) => {
  const not = new HostNotification({
    _id: new mongoose.Types.ObjectId(),
    isHighlighted: false,
  });
  not
    .save()
    .then((result) => {
      res.status(201).json("CREATED");
    })
    .catch((err) => res.status(500).json("PUKO SAM"));
});

module.exports = router;
