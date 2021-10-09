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

const multer = require('multer');
const { storage, cloudinary } = require('../cloudinary');
const upload = multer({ storage });
router
	.route('/admin/sliderrevolution')
	.get((req, res) => {
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
				res.render('admin/home/sliderRevolution', { img: arr });
			}
		});
	})
	.post(upload.single('sliderimg'), (req, res) => {
		if (typeof (req.body.sliderimg === 'string')) {
			cloudinary.uploader.destroy(req.body.checkbox);
			db.query(
				'UPDATE homeslider SET sliderimg = ? AND imgname = ? WHERE cloudinaryname = ?',
				[req.file.path, req.file.originalname, req.body.checkbox]
			);
			res.render('admin/home/sliderRevolution');
		} else {
			req.body.sliderimg.forEach((img, index1) => {
				0.3;
				req.body.checkbox.forEach(async (check, index2) => {
					if (index1 === index2) {
						console.log(check);
						await cloudinary.uploader.destroy(check);
						db.query(
							'UPDATE homeslider SET sliderimg = ? WHERE cloudinaryname = ?',
							[req.file.path, check]
						);
					}
				});
			});
			res.render('admin/home/sliderRevolution');
		}
	});

router.route('/admin/latestupdates').get((req, res) => {
	res.render('admin/home/latestUpdates');
});

router.route('/admin/ourtoppers').get((req, res) => {
	res.render('admin/home/ourToppers');
});

router.route('/admin/neetachievements').get((req, res) => {
	res.render('admin/home/neetAchievements');
});

router.route('/admin/studenttestimonials').get((req, res) => {
	res.render('admin/home/studentTestimonials');
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

module.exports = router;
