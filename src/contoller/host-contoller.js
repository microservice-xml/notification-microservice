const HostNotification = require("../model/HostNotification");
const hostService = require("../service/host-service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const hostNotification = new HostNotification({
    _id: new mongoose.Types.ObjectId(),
    isHighlighted: req.body.isHighlighted,
    userId: req.body.userId,
    dateTime: new Date(),
  });
  const response = await hostService.create(hostNotification);
  res.status(201).json("Successfully created host notification.");
};

const findAll = async (req, res) => {
  const response = await hostService.findAll();
  res.status(200).json(response);
};

const findById = async (req, res) => {
  const response = await hostService.findById(req.params.id);
  res.status(200).json(response);
};

const changeSeenStatus = async (req, res) => {
  const response = await hostService.changeSeenStatus(req.params.id);
  res.status(200).json("Seen status successfully changed.");
};

const update = async (req, res) => {
  const response = await hostService.update(req.body);
  res.status(200).json("Updated succesfully");
};

module.exports = { create, findAll, findById, changeSeenStatus, update };
