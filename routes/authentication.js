const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { isloggedin, flash } = require('../middleware');
const { response } = require('express');
const db = require('../database');

const yepp = 'yes';

// router
// 	.route('/register')
// 	.get((req, res) => {
// 		res.render('register');
// 	})
// 	.post((req, res) => {
// 		const { email, password, username } = req.body;
// 		const emailinuse = 'This email is already in use';
// 		db.query(
// 			'SELECT email FROM users WHERE email = ?',
// 			[email],
// 			async (err, results) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 				if (results.length > 0) {
// 					return res.render('login', { emailinuse });
// 				}

// 				let hashedPassword = await bcrypt.hash(password, 8);

// 				db.query(
// 					'INSERT INTO users SET ?',
// 					{ username: username, email: email, password: hashedPassword },
// 					(err, results) => {
// 						if (err) {
// 							console.log(err);
// 						} else {
// 							return res.render('home');
// 						}
// 					}
// 				);
// 			}
// 		);
// 	});

router
	.route('/login')
	.get(flash, (req, res) => {
		res.render('login');
	})
	.post(flash, async (req, res) => {
		const { password, username } = req.body;
		const hasedpass = await bcrypt.hash(password, 8);

		db.query(
			'SELECT * FROM users WHERE username = ?',
			[username],
			(error, response) => {
				if (response && response.length > 0) {
					const passcon = bcrypt.compare(
						password,
						response[0].password,
						function (err, result) {
							if (result) {
								const loginuser = 'Yes';
								req.session.loginuser = loginuser;
								req.session.user = username;
								res.redirect('/admin');
							} else {
								req.flash('error', 'Invalid Username or Password');
								res.redirect('/login');
							}
						}
					);
				} else {
					req.flash('error', 'Invalid Username or Password');
					res.redirect('/login');
				}
			}
		);
	});
const multer = require('multer');
const { storage, cloudinary } = require('../cloudinary');
const upload = multer({ storage });

router.route('/logout').post((req, res) => {
	req.session.destroy(() => {
		res.redirect('/login');
	});
});

router
	.route('/changepassword')
	.get(isloggedin, flash, (req, res) => {
		res.render('admin/auth/changepassword');
	})
	.post(isloggedin, (req, res) => {
		const { password, newpassword, confirmpassword } = req.body;
		if (newpassword !== confirmpassword) {
			req.flash('error', 'New Password and Confirm Password does not match');
			res.redirect('/changepassword');
		} else {
			db.query(
				'SELECT password FROM users WHERE username = ?',
				[req.session.user],
				(err, results) => {
					if (err) {
						console.log(err);
						res.redirect('/changepassword');
						return;
					} else {
						const userpass = results[0].password;
						bcrypt.compare(password, userpass, (err, result) => {
							if (result) {
								bcrypt.hash(newpassword, 8, (err, hash) => {
									db.query(
										'UPDATE users SET password = ? WHERE username = ?',
										[hash, req.session.user],
										(err, results) => {
											if (err) {
												console.log(err);
											} else {
												req.flash('success', 'Password Changed Successfully');
												res.redirect('/changepassword');
											}
										}
									);
								});
							} else {
								req.flash('error', 'Invalid Password');
								res.redirect('/changepassword');
							}
						});
					}
				}
			);
		}
	});

// router
//   .route("/homeslider")
//   .get((req, res) => {
//     res.render("cloudinary");
//   })
//   .post(upload.single("sliderimg"), (req, res) => {
//     const path = req.file.path;
//     const fieldname = req.file.originalname;
//     const cloudinaryName = req.file.filename.split("/")[1];

//     db.query(
//       "INSERT INTO loadingimage SET ?",
//       { imgname: fieldname, sliderimg: path, cloudinaryname: cloudinaryName },
//       (err, results) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.redirect("/homeslider");
//         }
//       }
//     );
//   });

// router
//   .route("/latestupdatesform")
//   .get((req, res) => {
//     res.render("latestupdatesform");
//   })
//   .post((req, res) => {
//     const link = req.body;
//   });
module.exports = router;
