const mongoose = require("mongoose");
const GuestNotification = require("../model/GuestNotification");

const create = async (guestNotification) => {
  return await guestNotification.save();
};

const findById = async (id) => {
  return await GuestNotification.findById(id).select(
    "userId reservationAnswer dateTime isSeen"
  );
};

const findAll = async () => {
  return await GuestNotification.find().select(
    "userId reservationAnswer dateTime isSeen"
  );
};

const changeSeenStatus = async (id) => {
  const notification = findById(id);
  notification.isSeen = true;
  return await GuestNotification.findByIdAndUpdate(id, notification);
};

const update = async (id, reservationAnswer) => {
  const notification = findById(id);
  notification.reservationAnswer = reservationAnswer;
  return await GuestNotification.findByIdAndUpdate(id, notification);
};

module.exports = { create, findById, findAll, changeSeenStatus, update };
