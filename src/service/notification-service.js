const { default: mongoose } = require("mongoose");
const Notification = require("../model/Notification");
const HostConfig = require("../model/HostConfig");
const GuestConfig = require("../model/GuestConfig");
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
    type: params.type,
  });
  await checkConfig(params.userId, params.type);
  return await notification.save();
};

const changeSeenStatus = async (id) => {
  const notification = await Notification.findById(id);
  notification.isSeen = true;
  return await Notification.findByIdAndUpdate(id, notification);
};

const getConfig = async (userId) => {
  let role = "HOST";
  let config = await HostConfig.findOne({ userId: userId });
  if (config == null) {
    config = await GuestConfig.findOne({ userId: userId });
    role = "GUEST";
  }
  return { config, role };
};

const checkConfig = async (userId, type) => {
  const data = await getConfig(userId);
  console.log(data.config[type]);
  if (data.role === "GUEST" && data.config[type]) emitNotifications(userId);
  else if (data.role === "HOST" && data.config[type]) emitNotifications(userId);
};

const emitNotifications = (userId) => {
  io.emit("notifications", userId);
};
module.exports = { findAllByUserId, create, changeSeenStatus };
