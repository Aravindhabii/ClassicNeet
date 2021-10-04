const express = require("express");
const router = express.Router();

router.route("/home").get((req, res) => {
  res.render('home')
});



// router.route("/").get((req, res) => {});

module.exports = router;
