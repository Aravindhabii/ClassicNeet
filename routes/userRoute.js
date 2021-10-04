const express = require("express");
const router = express.Router();

router.route("/home").get((req, res) => {
  res.render('home')
});
router.route("/adminheader").get((req, res) => {
  res.render('layout/adminheader')
});

module.exports = router;
