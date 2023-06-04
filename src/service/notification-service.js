const { default: mongoose } = require("mongoose");
const Notification = require("../model/Notification");
const io = require("socket.io")(9088, {
  cors: {
    origin: "http://localhost:3000",
  },
});

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

  io.emit("notifications", params.userId);
  return await notification.save();
};

const changeSeenStatus = async (id) => {
  const notification = await Notification.findById(id);
  notification.isSeen = true;
  return await Notification.findByIdAndUpdate(id, notification);
};
module.exports = { findAllByUserId, create, changeSeenStatus };
