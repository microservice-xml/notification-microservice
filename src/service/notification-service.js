const { default: mongoose } = require("mongoose");
const Notification = require("../model/Notification");

const findAllByUserId = async (id) => {
  return await Notification.find({ userId: id });
};
const create = async (params) => {
  const notification = new Notification({
    _id: new mongoose.Types.ObjectId(),
    userId: params.userId,
    dateTime: new Date(),
    message: params.message,
  });
  return await notification.save();
};

const changeSeenStatus = async (id) => {
  const notification = await Notification.findById(id);
  notification.isSeen = true;
  return await Notification.findByIdAndUpdate(id, notification);
};
module.exports = { findAllByUserId, create, changeSeenStatus };
