const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All the fruits.");
});

module.exports = router;
