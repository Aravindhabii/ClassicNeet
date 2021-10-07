const express = require("express");
const router = express.Router();
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "classicneetauth",
// });


router.route("/home").get((req, res) => {
  

  // db.query(
  //   "SELECT * FROM homeslider",
  //   (error, response) => {
  //     var arr = []
  //     if (error) {
  //       // console.log(imganame);
  //       console.log(error);
  //     } else {
  //       console.log(response.length);
  //       for(let i = 0; i <= response.length-1 ; i++){
          
  //         var image = {sliderimg:response[i].sliderimg, imgname: response[i].imgname}
  //         // console.log(image);
  //         arr.push(image)
  //       }
        // console.log(response[0].sliderimg);
        // console.log(arr);,{img : arr}
        res.render("home");
      // }
    // }
  // );
  
});


// router.route("/adminheader").get((req, res) => {
//   db.query("SELECT * FROM homeslider", (error, response) => {
//     var arr = [];
//     if (error) {
//       // console.log(imganame);
//       console.log(error);
//     } else {
//       console.log(response.length);
//       for (let i = 0; i <= response.length - 1; i++) {
//         var image = {
//           sliderimg: response[i].sliderimg,
//           imgname: response[i].imgname,
//         };
//         // console.log(image);
//         arr.push(image);
//       }
//       // console.log(response[0].sliderimg);
//       console.log(arr);
//       res.render("admin", { img: arr });
//     }
//   });



  
// });

module.exports = router;


