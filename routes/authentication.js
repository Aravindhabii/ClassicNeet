const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// const jws = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { isloggedin } = require("../middleware.js");
const { response } = require("express");

console.log(isloggedin);
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
          "INSERT INTO users SET ?",
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
    // const emailinuse = "This email is already in use";
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

router
  .route("/admin")
  .get((req, res) => {
    const imganame = "image1";
    db.query(
      "SELECT * FROM homeslider WHERE imgname = ?",
      [imganame],
      (error, response) => {
        if (error) {
          console.log(imganame);
          console.log(error);
        } else {
          const image = response[0].sliderimg.toString("base64").split("=")[0];
          console.log(image);
          res.render("sqlreg", { img: image });
        }
      }
    );
  })
  .post((req, res) => {
    const { imagename, sliderimg } = req.body;
    // db.query("SELECT email FROM homeslider WHERE imgname")
    console.log(imagename, sliderimg);
    db.query(
      "INSERT INTO homeslider SET ?",
      { imgname: imagename, sliderimg: sliderimg },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          return res.render("home");
        }
      }
    );
  });

const multer = require("multer");
const { storage, cloudinary } = require("../cloudianry");
const upload = multer({ storage });

router
  .route("/homeslider")
  .get((req, res) => {
    res.render("cloudinary");
  })
  .post(upload.single("sliderimg"), (req, res) => {
    console.log(req.file.path);
    console.log(req.file.fieldname);
    const path = req.file.path;
    const fieldname = req.file.fieldname;
    const cloudinaryName = req.file.filename.split("/")[1];
    // console.log(req.files);

    db.query(
      "INSERT INTO homeslider SET ?",
      { imgname: fieldname, sliderimg: path, cloudinaryname: cloudinaryName },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/home");
        }
      }
    );
  });

// router.post("/imgupdate", upload.single("sliderimg"), (req, res) => {
//   console.log(req.files);
//   if (typeof (req.body.sliderimg === "string")) {
//     cloudinary.uploader.destroy(req.body.checkbox);
//     db.query("UPDATE homeslider SET sliderimg = ? WHERE cloudinaryname = ?", [
//       req.file.path,
//       req.body.checkbox,
//     ]);
//   } else {
//     req.body.sliderimg.forEach((img, index1) => {
//       req.body.checkbox.forEach((check, index2) => {
//         if (index1 === index2) {
//           cloudinary.uploader.destroy(check);
//           db.query(
//             "UPDATE homeslider SET sliderimg = ? WHERE cloudinaryname = ?",
//             [req.file.path, check]
//           );
//         }
//       });
//     });
//   }
// });

module.exports = router;
