const express = require("express");
const router = express.Router();
const notificationContoller = require("../contoller/notification-contoller");
router.get("/:id", notificationContoller.findAllByUserId);
router.post("/", notificationContoller.create);
router.put("/:id", notificationContoller.changeSeenStatus);
module.exports = router;
