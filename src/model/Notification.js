const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  isSeen: { type: Boolean, default: false },
  userId: { type: Number, required: true },
  dateTime: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model(
  "Notification",
  NotificationSchema,
  "Notification"
);
