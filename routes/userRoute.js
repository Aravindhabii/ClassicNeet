const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicneetauth",
});


router.route("/home").get((req, res) => {
  

  db.query(
    "SELECT sliderimg FROM homeslider ",
    (error, response) => {
      var arr = []
      if (error) {
        console.log(imganame);
        console.log(error);
      } else {
        console.log(response.length);
        for(let i = 0; i <= response.length-1 ; i++){
          
          var image = response[i].sliderimg;
          // console.log(image);
          arr.push(image)
          console.log(arr);
        }
        // console.log(response[0].sliderimg);
        console.log(arr);
        // console.log(response[0]);
        res.render("home",{img : arr});
      }
    }
  );
  
});


router.route("/adminheader").get((req, res) => {
  res.render('admin')
});

module.exports = router;


