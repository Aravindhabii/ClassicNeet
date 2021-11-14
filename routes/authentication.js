const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { isloggedin } = require('../middleware.js');
const { response } = require('express');
const db = require('../database');
const flash = require('connect-flash');


const yepp = 'yes';

router
	.route('/register')
	.get((req, res) => {
		res.render('register');
	})
	.post((req, res) => {
		const { email, password, username } = req.body;
		const emailinuse = 'This email is already in use';
		// console.log(req.body);
		db.query(
			'SELECT email FROM users WHERE email = ?',
			[email],
			async (err, results) => {
				if (err) {
					console.log(err);
				}
				if (results.length > 0) {
					return res.render('login', { emailinuse });
					console.log(results);
				}

				let hashedPassword = await bcrypt.hash(password, 8);
				console.log(hashedPassword);

				db.query(
					'INSERT INTO users SET ?',
					{ username: username, email: email, password: hashedPassword },
					(err, results) => {
						if (err) {
							console.log(err);
						} else {
							// console.log(results);
							return res.render('home');
						}
					}
				);
			}
		);
	});

router
	.route('/login')
	.get((req, res) => {
		res.render('login');
	})
	.post(async (req, res) => {
		const { password, username } = req.body;
		const hasedpass = await bcrypt.hash(password, 8);
		
		db.query(
			'SELECT * FROM users WHERE username = ?',
			[username],
			(err, response) => {
				console.log(hasedpass, response[0].password);
				const passcon = bcrypt.compare(
					password,
					response[0].password,
					function (err, result) {
						console.log(result);
						if (result) {
							console.log(result);
							const loginuser = 'Yes';
							req.session.loginuser = loginuser;
							console.log(req.session.loginuser);
							req.flash('success', 'Successfully Logged In');
							console.log(res.locals.success);
							res.redirect('/admin');
						} else {
							res.redirect('/login');
						}
					}
				);
			}
		);
	});
const multer = require('multer');
const { storage, cloudinary } = require('../cloudinary');
const upload = multer({ storage });
// router
//   .route("/admin")
//   .get((req, res) => {
//     const imganame = "image1";
//     db.query(
//       "SELECT * FROM homeslider WHERE imgname = ?",
//       [imganame],
//       (error, response) => {
//         if (error) {
//           console.log(imganame);
//           console.log(error);
//         } else {
//           const image = response[0].sliderimg.toString("base64").split("=")[0];
//           console.log(image);
//           res.render("sqlreg", { img: image });
//         }
//       }
//     );
//   })
//   .post((req, res) => {
//     const { imagename, sliderimg } = req.body;
//     // db.query("SELECT email FROM homeslider WHERE imgname")
//     console.log(imagename, sliderimg);
//     db.query(
//       "INSERT INTO homeslider SET ?",
//       { imgname: imagename, sliderimg: sliderimg },
//       (err, results) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(results);
//           return res.render("home");
//         }
//       }
//     );
//   });

router
	.route('/homeslider')
	.get((req, res) => {
		res.render('cloudinary');
	})
	.post(upload.single('sliderimg'), (req, res) => {
		const path = req.file.path;
		const fieldname = req.file.originalname;
		const cloudinaryName = req.file.filename.split('/')[1];
		// console.log(req.files);

		db.query(
			'INSERT INTO homeslider SET ?',
			{ imgname: fieldname, sliderimg: path, cloudinaryname: cloudinaryName },
			(err, results) => {
				if (err) {
					console.log(err);
				} else {
					console.log(results);
					res.redirect('/homeslider');
				}
			}
		);
	});

router
	.route('/latestupdatesform')
	.get((req, res) => {
		res.render('latestupdatesform');
	})
	.post((req, res) => {
		const link = req.body;
		
	});
module.exports = router;
