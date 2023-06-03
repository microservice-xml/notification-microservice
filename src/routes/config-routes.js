const express = require("express");
const router = express.Router();
const configContoller = require("../contoller/config-contoller");

router.post("/host", configContoller.createHostConfig);
router.post("/guest", configContoller.createGuestConfig);
router.put("/host", configContoller.updateHostConfig);
router.put("/guest", configContoller.updateGuestConfig);
router.get("/host/:id", configContoller.findHostById);
router.get("/guest/:id", configContoller.findGuestById);

module.exports = router;
