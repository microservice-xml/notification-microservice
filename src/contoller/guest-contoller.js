const GuestNotification = require("../model/GuestNotification");
const mongoose = require("mongoose");
const guestService = require("../service/guest-service");

const create = async (req, res) => {
  const guestNot = new GuestNotification({
    _id: new mongoose.Types.ObjectId(),
    reservationAnswer: req.body.reservationAnswer,
    userId: req.body.userId,
    dateTime: new Date(),
  });
  try {
    const newGuestNot = await guestService.create(guestNot);
    res.status(201).json("Created guest notification");
  } catch (error) {
    res.status(500).json("Something failed.");
  }
};

const findById = async (req, res) => {
  const guest = await guestService.findById(req.params.id);
  res.status(200).json(guest);
};

const findAll = async (req, res) => {
  const response = await guestService.findAll();
  res.status(200).json(response);
};

const changeSeenStatus = async (req, res) => {
  const response = await guestService.changeSeenStatus(req.params.id);
  res.status(200).json("Seen status successfully updated.");
};

const update = async (req, res) => {
  const response = await guestService.update(
    req.body.id,
    req.body.reservationAnswer
  );
  res.status(200).json("Notification successfully updated.");
};

module.exports = { create, findById, findAll, changeSeenStatus, update };
