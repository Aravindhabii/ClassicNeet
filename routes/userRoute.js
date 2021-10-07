const express = require("express");
const router = express.Router();

router.route("/home").get((req, res) => {
  res.render('home')
});
router.route("/adminheader").get((req, res) => {
  res.render('admin')
});
router.route("/aboutus").get((req, res) => {
  res.render('aboutus')
});
router.route("/coursesNEET").get((req, res) => {
  res.render('coursesNEET')
});
router.route("/coursesIIT&Medical").get((req, res) => {
  res.render('coursesIIT&Medical')
});
router.route("/Demovideos").get((req, res) => {
  res.render('Demovideos')
});
router.route("/results").get((req, res) => {
  res.render('results')
});

module.exports = router;
