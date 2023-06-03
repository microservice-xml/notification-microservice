const express = require("express");
const router = express.Router();
const hostContoller = require("../contoller/host-contoller");

router.post("/", hostContoller.create);
router.get("/", hostContoller.findAll);
router.get("/:id", hostContoller.findById);
router.patch("/", hostContoller.update);
router.patch("/:id", hostContoller.changeSeenStatus);

module.exports = router;
