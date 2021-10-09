const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
const db = require('../database');

dotenv.config({ path: './.env' });

router.route('/home').get((req, res) => {
	db.query('SELECT * FROM homeslider', (error, response) => {
		var arr = [];
		if (error) {
			// console.log(imganame);
			console.log(error);
		} else {
			console.log(response.length);
			for (let i = 0; i <= response.length - 1; i++) {
				var image = {
					sliderimg: response[i].sliderimg,
					imgname: response[i].imgname
				};
				// console.log(image);
				arr.push(image);
			}
			// console.log(response[0].sliderimg);
			console.log(arr);
			res.render('home', { img: arr });
		}
	});

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
	// res.render("home");
	// }
	// }
	// );
});

router.route('/adminheader').get((req, res) => {
	db.query('SELECT * FROM homeslider', (error, response) => {
		var arr = [];
		if (error) {
			console.log(error);
		} else {
			console.log(response.length);
			for (let i = 0; i <= response.length - 1; i++) {
				var image = {
					sliderimg: response[i].sliderimg,
					imgname: response[i].imgname,
					cloudinaryName: response[i].cloudinaryname
				};
				arr.push(image);
			}
			console.log(arr);
			res.render('admin', { img: arr });
		}
		// res.render('admin')
	});
});
router.route('/aboutus').get((req, res) => {
	res.render('aboutus');
});
router.route('/coursesNEET').get((req, res) => {
	res.render('coursesNEET');
});
router.route('/coursesIIT&Medical').get((req, res) => {
	res.render('coursesIIT&Medical');
});
router.route('/Demovideos').get((req, res) => {
	res.render('Demovideos');
});
router.route('/results').get((req, res) => {
	res.render('results');
});
router.route('/contactus').get((req, res) => {
	res.render('contactus');
});
router.route('/successstories').get((req, res) => {
	res.render('successStories');
});
router.route('/404error').get((req, res) => {
	res.render('404error');
});

module.exports = router;
