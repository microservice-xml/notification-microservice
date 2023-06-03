const express = require("express");
const router = express.Router();
const GuestNotification = require("../model/GuestNotification");
const { default: mongoose } = require("mongoose");

router.get("/", (req, res, next) => {
  const guest = new GuestNotification({
    _id: new mongoose.Types.ObjectId(),
    reservationAnswer: true,
  });

  guest
    .save()
    .then(res.status(201).json("NAPRAVIO SAM"))
    .cache((err) => res.status(500).json(err));
});

module.exports = router;
