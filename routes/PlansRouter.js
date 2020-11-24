const express = require("express");
const router = express.Router();
const PlansController = require("../controllers/PlansController");

router.get("/admin/plans", PlansController.index);

router.get("/admin/plans/create", PlansController.create)

router.post("/plans/store", PlansController.store);


module.exports = router;