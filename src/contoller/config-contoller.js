const configService = require("../service/config-service");

const createHostConfig = async (req, res) => {
  const cfg = await configService.createHostConfig(req.body.userId);
  res.status(200).json(cfg);
};
const createGuestConfig = async (req, res) => {
  const cfg = await configService.createGuestConfig(req.body.userId);
  res.status(200).json(cfg);
};
const updateHostConfig = async (req, res) => {
  const cfg = await configService.updateHostConfig(req.body);
  res.status(200).json(cfg);
};
const updateGuestConfig = async (req, res) => {
  const cfg = await configService.updateGuestConfig(req.body);
  res.status(200).json(cfg);
};
const findHostById = async (req, res) => {
  const cfg = await configService.findHostById(req.params.id);
  res.status(200).json(cfg);
};
const findGuestById = async (req, res) => {
  const cfg = await configService.findGuestById(req.params.id);
  res.status(200).json(cfg);
};

module.exports = {
  createHostConfig,
  createGuestConfig,
  updateHostConfig,
  updateGuestConfig,
  findHostById,
  findGuestById,
};
