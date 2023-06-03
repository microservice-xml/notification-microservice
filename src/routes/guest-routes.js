const express = require("express");
const router = express.Router();
const guestContoller = require("../contoller/guest-contoller");

router.post("/", guestContoller.create);
router.get("/:id", guestContoller.findById);
router.get("/", guestContoller.findAll);
router.patch("/:id", guestContoller.changeSeenStatus);
router.patch("/", guestContoller.update);

module.exports = router;
