const mongoose = require("mongoose");
const HostConfig = require("../model/HostConfig");
const GuestConfig = require("../model/GuestConfig");

const createHostConfig = async (userId) => {
  const hostConfig = new HostConfig({
    _id: new mongoose.Types.ObjectId(),
    userId: userId,
  });
  return await hostConfig.save();
};
const createGuestConfig = async (userId) => {
  const guestConfig = new GuestConfig({
    _id: new mongoose.Types.ObjectId(),
    userId: userId,
  });
  return await guestConfig.save();
};
const updateHostConfig = async (params) => {
  const config = await HostConfig.findOne({ userId: params.userId });
  config.newReservation = params.newReservation;
  config.cancelReservation = params.cancelReservation;
  config.newRate = params.newRate;
  config.newRateAcc = params.newRateAcc;
  config.isHighlighted = params.isHighlighted;

  return await HostConfig.findByIdAndUpdate(config._id, config);
};
const updateGuestConfig = async (params) => {
  const config = await GuestConfig.findOne({ userId: params.userId });
  config.reservationAnswer = params.reservationAnswer;
  return await GuestConfig.findByIdAndUpdate(config._id, config);
};
const findHostById = async (id) => {
  return await HostConfig.findOne({ userId: id });
};
const findGuestById = async (id) => {
  return await GuestConfig.findOne({ userId: id });
};

module.exports = {
  createHostConfig,
  createGuestConfig,
  updateHostConfig,
  updateGuestConfig,
  findHostById,
  findGuestById,
};
