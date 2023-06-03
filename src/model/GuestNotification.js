const mongoose = require("mongoose");

const guestNotificationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reservationAnswer: { type: Boolean, required: true },
  isSeen: { type: Boolean, default: false },
  userId: { type: Number, required: true },
  dateTime: { type: String, required: true },
});

module.exports = mongoose.model(
  "GuestNotification",
  guestNotificationSchema,
  "GuestNotification"
);
