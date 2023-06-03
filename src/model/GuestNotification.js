const mongoose = require("mongoose");

const guestNotificationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reservationAnswer: { type: Boolean, required: true },
});

module.exports = mongoose.model(
  "GuestNotification",
  guestNotificationSchema,
  "GuestNotification"
);
