const notificationService = require("../service/notification-service");

const findAllByUserId = async (req, res) => {
  const notifications = await notificationService.findAllByUserId(
    req.params.id
  );
  res.status(200).json(notifications);
};

const create = async (req, res) => {
  const notification = await notificationService.create(req.body);
  res.status(200).json(notification);
};

const changeSeenStatus = async (req, res) => {
  const notification = await notificationService.changeSeenStatus(
    req.params.id
  );
  res.status(200).json(notification);
};

module.exports = { findAllByUserId, create, changeSeenStatus };
