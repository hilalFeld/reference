const router = require("express").Router();

const { gettour,posttour } = require("../controller/tourcontroller");

router.get("/", gettour);
router.post("/",posttour)

module.exports = router;