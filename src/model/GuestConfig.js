const mongoose = require("mongoose");

const guestConfigSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  reservationAnswer: { type: Boolean, default: true },
  userId: { type: Number, required: true },
});

module.exports = mongoose.model(
  "GuestConfig",
  guestConfigSchema,
  "GuestConfig"
);
