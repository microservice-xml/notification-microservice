const mongoose = require("mongoose");

const hostConfigSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  newReservation: { type: Boolean, default: true },
  cancelReservation: { type: Boolean, default: true },
  newRate: { type: Boolean, default: true },
  newRateAcc: { type: Boolean, default: true },
  isHighlighted: { type: Boolean, default: true },
  userId: { type: Number, required: true },
});

module.exports = mongoose.model("HostConfig", hostConfigSchema, "HostConfig");
