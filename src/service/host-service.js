const HostNotification = require("../model/HostNotification");

const create = async (hostNotification) => {
  return await hostNotification.save();
};

const findAll = async () => {
  return await HostNotification.find().select(
    "newReservation  cancelReservation newRate newRateAcc isHighlighted isSeen userId dateTime"
  );
};

const findById = async (id) => {
  return await HostNotification.findById(id).select(
    "newReservation  cancelReservation newRate newRateAcc isHighlighted isSeen userId dateTime"
  );
};

const changeSeenStatus = async (id) => {
  const notification = findById(id);
  notification.isSeen = true;
  return await HostNotification.findByIdAndUpdate(id, notification);
};

const update = async () => {};

module.exports = { create, findAll, findById, changeSeenStatus, update };
