const mongoose = require("mongoose");

const hostNotificationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  newReservation: { type: Boolean, default: true },
  cancelReservation: { type: Boolean, default: true },
  newRate: { type: Boolean, default: true },
  newRateAcc: { type: Boolean, default: true },
  isHighlighted: { type: Boolean, required: true },
  isSeen: { type: Boolean, default: false },
  userId: { type: Boolean, required: true },
  dateTime: { type: Boolean, required: true },
});

module.exports = mongoose.model(
  "HostNotification",
  hostNotificationSchema,
  "HostNotification"
);
