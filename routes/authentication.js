const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const jws = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const {isloggedin} = require("../middleware.js");

console.log( isloggedin );
const yepp = "yes";

dotenv.config({ path: "../.env" });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicneetauth",
});

router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post((req, res) => {
    const { email, password, username } = req.body;
    const emailinuse = "This email is already in use";
    // console.log(req.body);
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.log(err);
        }
        if (results.length > 0) {
          return res.render("login", { emailinuse });
          console.log(results);
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query(
          "INSERT INTO users SET ? ",
          { username: username, email: email, password: hashedPassword },
          (err, results) => {
            if (err) {
              console.log(err);
            } else {
              // console.log(results);
              return res.render("home");
            }
          }
        );
      }
    );
  });

router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    const { password, username } = req.body;
    const emailinuse = "This email is already in use";
    const hasedpass = await bcrypt.hash(password, 8);
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (err, result) => {
        const passcon = bcrypt.compare(
          password,
          hasedpass,
          function (err, result) {
            console.log();
            if (result) {
              console.log(result);
              const loginuser = "Yes";
              req.session.loginuser = loginuser;
              console.log(req.session.loginuser);
              res.redirect("/admin");
            } else {
              res.redirect("/login");
            }
          }
        );
      }
    );
  });

router.route("/admin").get(isloggedin,(req, res) => {
  // console.log(req.session.loginuser);
  res.send(`helooo from admin ${req.session.loginuser}`);
});

module.exports = router;
