const express = require('express');
const fs = require('fs')
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
const db = require('../database');
const multer = require('multer');
const { storage, cloudinary } = require('../cloudinary');
const { response } = require('express');
const upload = multer({ storage });
var sizeOf = require('image-size');
const { isloggedin, flash } = require('../middleware');

router
	.route('/example')
	.get(async (req, res) => {
		res.render('admin/courses/empty');
	})
	.post(async (req, res) => {
		sizeOf(req.body, function (err, dimensions) {});
	});

dotenv.config({ path: './.env' });

router.route('/').get(async (req, res) => {
	await db.query('SELECT * FROM homeslider', async (error, response) => {
		var arr = [];
		if (error) {
			console.log(error);
		} else {
			for (let i = 0; i <= response.length - 1; i++) {
				var image = {
					sliderimg: response[i].sliderimg,
					imgname: response[i].imgname
				};
				arr.push(image);
			}
			await db.query('SELECT * FROM ourtoppers', async (error, response) => {
				var ourtoppers = [];
				if (error) {
					console.log(error);
				} else {
					for (let i = 0; i <= response.length - 1; i++) {
						var image = {
							name: response[i].name,
							collegename: response[i].collegename,
							cloudinaryname: response[i].cloudinaryname,
							studentimg: response[i].studentimg,
							score: response[i].score
						};
						ourtoppers.push(image);
					}
					await db.query(
						'SELECT * FROM calendarevents',
						async (error, response) => {
							var calendar = [];
							if (error) {
								console.log(error);
							} else {
								for (let i = 0; i <= response.length - 1; i++) {
									var c = {
										date: response[i].date,
										month: response[i].month,
										event: response[i].event
									};
									calendar.push(c);
								}
								await db.query(
									'SELECT * FROM latest_updates',
									async (err, response) => {
										latestupdates = [];
										if (err) {
											console.log(err);
										} else {
											for (let i = 0; i <= response.length - 1; i++) {
												var link = response[i].latestupdates;
												var link1 = response[i].link;
												// console.log(image)
												latestupdates.push({ link, link1 });
											}

											await db.query(
												'SELECT * FROM studenttestimonials',
												async (err, response) => {
													stutest = [];
													if (err) {
														console.log(err);
													} else {
														for (let i = 0; i <= response.length - 1; i++) {
															var link = response[i].testimonialslink;
															// console.log(image)
															stutest.push(link);
														}
														// console.log(response[0].latestupdates);
													}
													await db.query(
														'SELECT * FROM neetacheivements',
														async (err, response) => {
															neetachieve = [];
															if (err) {
																console.log(err);
															} else {
																for (let i = 0; i <= response.length - 1; i++) {
																	var neetvar = {
																		seats: response[i].seats,
																		consecutiveyears:
																			response[i].consecutiveyears,
																		successrate: response[i].successrate,
																		admissions: response[i].admissions
																	};
																	// console.log(image)
																	neetachieve.push(neetvar);
																}
																// console.log(response[0].latestupdates);
															}

															res.render('home', {
																img: arr,
																ourtoppers,
																calendar: calendar,
																latestupdates,
																stutest,
																neetachieve
															});
														}
													);
												}
											);
										}
									}
								);
							}
						}
					);
				}
			});
		}
	});
});

router.route('/admin').get(isloggedin, async (req, res) => {
	res.redirect('/admin/sliderrevolution');
});

// slider Revolution Route
router
	.route('/admin/sliderrevolution')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM homeslider', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var image = {
						sliderimg: response[i].sliderimg,
						imgname: response[i].imgname,
						cloudinaryName: response[i].cloudinaryname
					};
					arr.push(image);
				}
			}
			res.render('admin/home/sliderRevolution', { img: arr });
		});
	})
	.post(upload.array('sliderimg'), async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			// await cloudinary.uploader.destroy(req.body.checkbox);
			await db.query(
				'UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
				[
					req.files[0].path,
					req.files[0].originalname,
					req.files[0].filename.split('/')[1],
					req.body.checkbox
				],(err,response)=>{
					if (err) {
						req.flash('error', 'Error occurred while Updating');
						console.log(err);
					}else{
						res.redirect('/admin/sliderrevolution');
					}
				}
			);
			
	
		} else {
			for (let i = 0; i <= req.files.length - 1; i++) {
				for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
					if (i === j) {
						await cloudinary.uploader.destroy(`ClassicNeetAcademy/${check}`);
						await db.query(
							'UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
							[
								req.files[j].path,
								req.files[j].originalname,
								req.files[j].filename.split('/')[1],
								req.body.checkbox[j]
							],(err,response)=>{
								if (err) {
									req.flash('error', 'Error occurred while Updating');
									console.log(err);
									return
								}
							}
						);
					}
				}
			}
			res.redirect('/admin/sliderrevolution');
			// req.body.sliderimg.forEach((img, index1) => {
			// 	req.body.checkbox.forEach(async (check, index2) => {
			// 		if (index1 === index2) {
			// 			console.log(check);
			// 			// await cloudinary.uploader.destroy(check);
			// 			await db.query(
			// 				'UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
			// 				[
			// 					req.file.path,
			// 					req.file.originalname,
			// 					req.file.filename.split('/')[1],
			// 					req.body.checkbox
			// 				]
			// 			);
			// 		}
			// 	});
			// });
		}
	});

// latest updates route
router
	.route('/admin/latestupdates')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM latest_updates', (err, response) => {
			arr = [];
			if (err) {
				req.flash('error', 'Error occurred while adding');
				console.log(err);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var link = response[i].latestupdates;
					var link1 = response[i].link;
					// console.log(image)
					arr.push({ link, link1 });
				}

				// console.log(response[0].latestupdates);
				res.render('admin/home/latestUpdates', { arr });
			}
		});
	})
	.post(async (req, res) => {
		const link = req.body.uploadlink;
		const link1 = req.body.link;
		await db.query(
			'INSERT INTO latest_updates SET ?',
			{ latestupdates: link, link: link1 },
			(err, results) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/latestupdates');
				}
			}
		);
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await db.query(
				'DELETE FROM latest_updates WHERE latestupdates = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while deleting');
						console.log(err);
					} else {
						console.log(response);
						res.redirect('/admin/latestupdates');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				await db.query(
					'DELETE FROM latest_updates WHERE latestupdates = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while deleting');
							console.log(err);
							return
						} else{
							console.log(response);
						}
					}
				);
			});
			res.redirect('/admin/latestupdates');
		}
	});

// Our Toppers Route
router
	.route('/admin/ourtoppers')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM ourtoppers', async (error, response) => {
			var arr = [];
			if (error) {
				req.flash('error', 'Error occurred while adding');
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var image = {
						name: response[i].name,
						collegename: response[i].collegename,
						cloudinaryname: response[i].cloudinaryname,
						studentimg: response[i].studentimg,
						score: response[i].score
					};
					arr.push(image);
				}
				res.render('admin/home/ourToppers', { students: arr });
			}
		});
	})
	.post(upload.single('studentimg'), async (req, res) => {
		await db.query(
			'INSERT INTO ourtoppers SET ?',
			{
				name: req.body.name,
				collegename: req.body.collegeName,
				studentimg: req.file.path,
				score: req.body.score,
				cloudinaryname: req.file.filename.split('/')[1]
			},
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
				}
			}
		);
		res.redirect('/admin/ourtoppers');
	})
	.put(upload.single('sliderimg'), async (req, res) => {
		await db.query(
			'UPDATE ourtoppers SET studentimg = ? WHERE cloudinaryname = ?',
			[req.file.path, req.body.cloudinaryname]
		);
		res.redirect('/admin/ourtoppers');
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await cloudinary.uploader.destroy(
				'ClassicNeetAcademy/' + req.body.checkbox
			);
			await db.query(
				'DELETE FROM ourtoppers WHERE cloudinaryname = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while deleting');
						console.log(err);
					} else {
						res.redirect('/admin/ourtoppers');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				await cloudinary.uploader.destroy('ClassicNeetAcademy/' + link);
				await db.query(
					'DELETE FROM ourtoppers WHERE cloudinaryname = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while deleting');
							console.log(err);
							return
						}
					}
				);
			});
			res.redirect('/admin/ourtoppers');
		}
	});

//Students testimonial Route
router
	.route('/admin/studenttestimonials')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM studenttestimonials', (err, response) => {
			arr = [];
			if (err) {
				req.flash('error', 'Error occurred while adding');
				console.log(err);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var link = response[i].testimonialslink;
					// console.log(image)
					arr.push(link);
				}
				// console.log(response[0].latestupdates);
				res.render('admin/home/studentTestimonials', { link: arr });
			}
		});
	})
	.post(async (req, res) => {
		const link = req.body.uploadlink;
		await db.query(
			'INSERT INTO studenttestimonials SET ?',
			{ testimonialslink: link },
			(err, results) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/studenttestimonials');
				}
			}
		);
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await db.query(
				'DELETE FROM studenttestimonials WHERE testimonialslink = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while deleting');
						console.log(err);
					} else {
						res.redirect('/admin/studenttestimonials');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				await db.query(
					'DELETE FROM studenttestimonials WHERE testimonialslink = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while deleting');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/studenttestimonials');
		}
	});

router
	.route('/admin/calendarevents')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM calendarevents', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var calendar = {
						date: response[i].date,
						month: response[i].month,
						event: response[i].event
					};
					arr.push(calendar);
				}
				res.render('admin/home/calendarEvents', { calendar: arr });
			}
		});
	})
	.post(async (req, res) => {
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		7;
		const month = monthNames[parseInt(req.body.date.split('-')[1]) - 1];
		const date = req.body.date.split('-')[2];
		const event = req.body.event;

		await db.query(
			'INSERT INTO calendarevents SET ?',
			{
				date,
				month,
				event
			},
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/calendarevents');
				}
			}
		);
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await db.query(
				'DELETE FROM calendarevents WHERE event = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while deleting');
						console.log(err);
					} else {
					}
				}
			);
			res.redirect('/admin/calendarevents');
		} else {
			req.body.checkbox.forEach(async (link) => {
				console.log(link);
				await db.query(
					'DELETE FROM calendarevents WHERE event = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while deleting');
							console.log(err);
						} else {
						}
					}
				);
			});
			res.redirect('/admin/calendarevents');
		}
	});

router
	.route('/admin/neetachievements')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM neetacheivements', (err, response) => {
			arr = [];
			if (err) {
				console.log(err);
			} else {
				var seats = response[0].seats;
				var consecutiveyears = response[0].consecutiveyears;
				var successrate = response[0].successrate;
				var admissions = response[0].admissions;
				res.render('admin/home/neetAchievements', {
					seats,
					consecutiveyears,
					successrate,
					admissions
				});
			}
			// console.log(response[0].latestupdates);
		});
	})
	.post(async (req, res) => {
		const { seat, years, rate, admiss } = req.body;
		await db.query(
			'UPDATE neetacheivements SET ? WHERE id = 1',
			{
				seats: seat,
				consecutiveyears: years,
				successrate: rate,
				admissions: admiss
			},
			(err, results) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/neetachievements');
				}
			}
		);
	});

router.route('/courses').get(async (req, res) => {
	res.render('courses');
});

router.route('/aboutus').get(async (req, res) => {
	var folderObject = {
		
	};
	const folders = fs.readdirSync('public/images/gallery')
	
	console.log(folders);
	
	folders.forEach(folder => {
		const files = fs.readdirSync(`public/images/gallery/${folder}`)
		
		console.log(files);
		
	})
		
	await db.query('SELECT * FROM history', async (error, response) => {
		var arr = [];
		if (error) {
			console.log(error);
		} else {
			for (let i = 0; i <= response.length - 1; i++) {
				var cont = {
					content: response[i].content,
					year: response[i].year
				};
				arr.push(cont);
			}
			res.render('aboutus', { content: arr });
		}
	});
});

router
	.route('/admin/aboutus/history')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM history', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var cont = {
						content: response[i].content,
						year: response[i].year
					};
					arr.push(cont);
				}
				res.render('admin/aboutus/history', { content: arr });
			}
		});
	})
	.post(async (req, res) => {
		const content = req.body.content;
		const year = req.body.year;
		await db.query(
			'INSERT INTO history SET ?',
			{ content: content, year: year },
			(err, results) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/aboutus/history');
				}
			}
		);
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await db.query(
				'DELETE FROM history WHERE year = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while adding');
						console.log(err);
					} else {
					}
				}
			);
			res.redirect('/admin/aboutus/history');
		} else {
			req.body.checkbox.forEach(async (year) => {
				await db.query(
					'DELETE FROM history WHERE year = ?',
					[year],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while adding');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/aboutus/history');
		}
	});

router.route('/coursesNEET').get(async (req, res) => {
	res.render('coursesNEET');
});
router.route('/coursesJEE').get(async (req, res) => {
	res.render('coursesJEE');
});
router.route('/coursesIIT&Medical').get(async (req, res) => {
	res.render('coursesIIT&Medical');
});
router.route('/coursesJEE').get(async (req, res) => {
	res.render('coursesJEE');
});
router.route('/Demovideos').get(async (req, res) => {
	await db.query('SELECT * FROM demovideos', (err, response) => {
		arr = [];
		if (err) {
			console.log(err);
		} else {
			for (let i = 0; i <= response.length - 1; i++) {
				var link = response[i].videolink;
				// console.log(image)
				arr.push(link);
			}
			db.query('SELECT * FROM demoimages', async (error, response) => {
				if (error) {
					console.log(error);
				} else {
					var image = {
						sliderimg: response[0].sliderimg,
						imgname: response[0].imgname,
						cloudinaryName: response[0].cloudinaryname
					};
				}
				res.render('demovideos', { link: arr, img: image });
			});
			// console.log(response[0].latestupdates);
		}
	});
});

router
	.route('/admin/demovideos')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM demovideos', (err, response) => {
			arr = [];
			if (err) {
				console.log(err);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var link = response[i].videolink;
					// console.log(image)
					arr.push(link);
				}
				// console.log(response[0].latestupdates);
				res.render('admin/demovideos/Demovideos', { link: arr });
			}
		});
	})
	.post(async (req, res) => {
		const link = req.body.uploadlink;
		await db.query(
			'INSERT INTO demovideos SET ?',
			{ videolink: link },
			(err, results) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/demovideos');
				}
			}
		);
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await db.query(
				'DELETE FROM demovideos WHERE videolink = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while adding');
						console.log(err);
					}
				}
			);
			res.redirect('/admin/demovideos');
		} else {
			req.body.checkbox.forEach(async (link) => {
				await db.query(
					'DELETE FROM demovideos WHERE videolink = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while adding');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/demovideos');
		}
	});

//demovideos bannerpic

router
	.route('/admin/bannerimg')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM demoimages', async (error, response) => {
			if (error) {
				console.log(error);
			} else {
				var image = {
					sliderimg: response[0].sliderimg,
					imgname: response[0].imgname,
					cloudinaryName: response[0].cloudinaryname
				};
			}
			res.render('admin/demovideos/headimage', { img: image });
		});
	})
	.post(upload.array('sliderimg'), async (req, res) => {
		await cloudinary.uploader.destroy(req.body.checkbox);
		await db.query(
			'UPDATE demoimages SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
			[
				req.files[0].path,
				req.files[0].originalname,
				req.files[0].filename.split('/')[1],
				req.body.checkbox
			],
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while Updating');
					console.log(err);
				} else {
					res.redirect('/admin/bannerimg');
				}
			}
		);
	});

router.route('/results').get(async (req, res) => {
	await db.query('SELECT * FROM studentdetails', async (error, response) => {
		var arr = [];
		if (error) {
			console.log(error);
		} else {
			for (let i = 0; i <= response.length - 1; i++) {
				var image = {
					name: response[i].name,
					collegename: response[i].collegename,
					studentimg: response[i].image,
					cloudinaryname: response[i].cloudinaryname,
					score: response[i].score
				};
				arr.push(image);
			}
			await db.query('SELECT * FROM resultslider', async (error, response) => {
				var slider = [];
				if (error) {
					console.log(error);
				} else {
					for (let i = 0; i <= response.length - 1; i++) {
						var image1 = {
							sliderimg: response[i].sliderimg,
							imgname: response[i].imgname,
							cloudinaryName: response[i].cloudinaryname
						};
						slider.push(image1);
					}
					res.render('results', { students: arr, slider });
				}
			});
		}
	});
});

router
	.route('/admin/results/studentdetails')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM studentdetails', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var image = {
						name: response[i].name,
						collegename: response[i].collegename,
						studentimg: response[i].image,
						cloudinaryname: response[i].cloudinaryname,
						score: response[i].score
					};
					arr.push(image);
				}
				res.render('admin/results/studentdetails', { students: arr });
			}
		});
	})
	.post(upload.single('studentimg'), async (req, res) => {
		await db.query(
			'INSERT INTO studentdetails SET ?',
			{
				name: req.body.name,
				collegename: req.body.collegeName,
				image: req.file.path,
				cloudinaryname: req.file.filename.split('/')[1]
			},
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/results/studentdetails');
				}
			}
		);
	})
	// .put(upload.single('sliderimg'), async (req, res) => {
	// 	await db.query(
	// 		'UPDATE studentdetails SET image = ? WHERE cloudinaryname = ?',
	// 		[req.file.path, req.body.cloudinaryname]
	// 	);
	// 	res.redirect('/admin/results/studentdetails');
	// })
	// .put(async(req,res)=>{
	// 	console.log(req.body);
	// 	await db.query(
	// 		'UPDATE studentdetails SET =? WHERE name = req.body.name',
	// 		{score:req.body.score, name:req.body.name, collegename:req.body.collegeName },
	// 		(err,response)=>{
	// 			if(err){
	// 				console.log(err);
	// 			}else{
	// 				res.redirect('/admin/results/studentdetails');
	// 			}
	// 		}
	// 	);
	// })
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await cloudinary.uploader.destroy(
				'ClassicNeetAcademy/' + req.body.checkbox
			);
			await db.query(
				'DELETE FROM studentdetails WHERE cloudinaryname = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while adding');
						console.log(err);
						return
					} else {
						res.redirect('/admin/results/studentdetails');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				console.log('holll');
				await cloudinary.uploader.destroy('ClassicNeetAcademy/' + link);
				await db.query(
					'DELETE FROM studentdetails WHERE cloudinaryname = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while adding');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/results/studentdetails');
		}
	});
// admin result images

router
	.route('/admin/results/studentupdate')
	.post(isloggedin, async (req, res) => {
		console.log(req.body);
		await db.query(
			'UPDATE studentdetails SET name = ?, collegename = ? WHERE name = ?',
			[req.body.stdname, req.body.clgname, req.body.oldname],
			(err, response) => {
				if (err) {
					console.log(err);
				} else {
					console.log(response);
					res.redirect('/admin/results/studentdetails');
				}
			}
		);
	});

router
	.route('/admin/results/images')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM resultslider', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var image = {
						sliderimg: response[i].sliderimg,
						imgname: response[i].imgname,
						cloudinaryName: response[i].cloudinaryname
					};
					arr.push(image);
				}
			}
			res.render('admin/results/images', { img: arr });
		});
	})
	.post(upload.array('sliderimg'), async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await cloudinary.uploader.destroy(req.body.checkbox);
			await db.query(
				'UPDATE resultslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
				[
					req.files[0].path,
					req.files[0].originalname,
					req.files[0].filename.split('/')[1],
					req.body.checkbox
				]
			)
			res.redirect('/admin/results/images');
		} else {
			for (let i = 0; i <= req.files.length - 1; i++) {
				for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
					if (i === j) {
						await cloudinary.uploader.destroy(
							`ClassicNeetAcademy/${req.body.checkbox[i]}`
						);
						await db.query(
							'UPDATE resultslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?',
							[
								req.files[j].path,
								req.files[j].originalname,
								req.files[j].filename.split('/')[1],
								req.body.checkbox[j]
							]
						);
						res.redirect('/admin/results/images');
					}
				}
			}
		}
	});

router.route('/contactus').get(async (req, res) => {
	res.render('contactus');
});

router.route('/successstories').get(async (req, res) => {
	await db.query('SELECT * FROM successstories', async (error, response) => {
		var arr = [];
		if (error) {
			console.log(error);
		} else {
			for (let i = 0; i <= response.length - 1; i++) {
				var image = {
					studentimg: response[i].image,
					cloudinaryname: response[i].cloudinaryname,
					youtubelink: response[i].youtubelink,
					studentname: response[i].studentname
				};
				arr.push(image);
			}
			await db.query(
				'SELECT * FROM parenttestimonials',
				async (error, response) => {
					var parent = [];
					if (error) {
						console.log(error);
					} else {
						for (let i = 0; i <= response.length - 1; i++) {
							var imageparent = {
								studentimg: response[i].image,
								cloudinaryname: response[i].cloudinaryname,
								youtubelink: response[i].youtubelink,
								studentname: response[i].studentname
							};
							parent.push(imageparent);
						}
						res.render('successStories2', {
							students: arr,
							parenttestimonials: parent
						});
					}
				}
			);
		}
	});
});

router
	.route('/admin/successstories/testimonials')
	.get(flash, isloggedin, async (req, res) => {
		await db.query('SELECT * FROM successstories', async (error, response) => {
			var arr = [];
			if (error) {
				console.log(error);
			} else {
				for (let i = 0; i <= response.length - 1; i++) {
					var image = {
						studentimg: response[i].image,
						cloudinaryname: response[i].cloudinaryname,
						youtubelink: response[i].youtubelink,
						studentname: response[i].studentname
					};
					arr.push(image);
				}
				res.render('admin/successstories/testimonials', { students: arr });
			}
		});
	})
	.post(upload.single('studentimg'), async (req, res) => {
		await db.query(
			'INSERT INTO successstories SET ?',
			{
				youtubelink: req.body.youtubelink,
				image: req.file.path,
				cloudinaryname: req.file.filename.split('/')[1],
				studentname: req.body.studentname
			},
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/successstories/testimonials');
				}
			}
		);
	})
	.put(upload.single('sliderimg'), async (req, res) => {
		await db.query(
			'UPDATE successstories SET image = ? WHERE cloudinaryname = ?',
			[req.file.path, req.body.cloudinaryname]
		);
		res.redirect('/admin/successstories/studentdetails');
	})
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await cloudinary.uploader.destroy(
				'ClassicNeetAcademy/' + req.body.checkbox
			);
			await db.query(
				'DELETE FROM successstories WHERE cloudinaryname = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while adding');
						console.log(err);
					} else {
						res.redirect('/admin/successstories/testimonials');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				await cloudinary.uploader.destroy('ClassicNeetAcademy/' + link);
				await db.query(
					'DELETE FROM successstories WHERE cloudinaryname = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while adding');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/successstories/testimonials');
		}
	});

router
	.route('/admin/successstories/parenttestimonials')
	.get(flash, isloggedin, async (req, res) => {
		await db.query(
			'SELECT * FROM parenttestimonials',
			async (error, response) => {
				var arr = [];
				if (error) {
					console.log(error);
				} else {
					for (let i = 0; i <= response.length - 1; i++) {
						var image = {
							studentimg: response[i].image,
							cloudinaryname: response[i].cloudinaryname,
							youtubelink: response[i].youtubelink,
							studentname: response[i].studentname
						};
						arr.push(image);
					}
					res.render('admin/successstories/parenttestimonial', {
						students: arr
					});
				}
			}
		);
	})
	.post(upload.single('studentimg'), async (req, res) => {
		await db.query(
			'INSERT INTO parenttestimonials SET ?',
			{
				youtubelink: req.body.youtubelink,
				image: req.file.path,
				cloudinaryname: req.file.filename.split('/')[1],
				studentname: req.body.studentname
			},
			(err, response) => {
				if (err) {
					req.flash('error', 'Error occurred while adding');
					console.log(err);
				} else {
					res.redirect('/admin/successstories/parenttestimonials');
				}
			}
		);
	})
	// .put(upload.single('sliderimg'), async (req, res) => {
	// 	await db.query(
	// 		'UPDATE successstories SET image = ? WHERE cloudinaryname = ?',
	// 		[req.file.path, req.body.cloudinaryname]
	// 	);
	// 	res.redirect('/admin/successstories/studentdetails');
	// })
	.delete(async (req, res) => {
		if (typeof req.body.checkbox === 'string') {
			await cloudinary.uploader.destroy(
				'ClassicNeetAcademy/' + req.body.checkbox
			);
			await db.query(
				'DELETE FROM parenttestimonials WHERE cloudinaryname = ?',
				[req.body.checkbox],
				(err, response) => {
					if (err) {
						req.flash('error', 'Error occurred while adding');
						console.log(err);
					} else {
						res.redirect('/admin/successstories/parenttestimonials');
					}
				}
			);
		} else {
			req.body.checkbox.forEach(async (link) => {
				await cloudinary.uploader.destroy('ClassicNeetAcademy/' + link);
				await db.query(
					'DELETE FROM parenttestimonials WHERE cloudinaryname = ?',
					[link],
					(err, response) => {
						if (err) {
							req.flash('error', 'Error occurred while adding');
							console.log(err);
							return
						} else {
						}
					}
				);
			});
			res.redirect('/admin/successstories/parenttestimonials');
		}
	});

router.post('/signout', isloggedin, (req, res) => {
	req.session.destroy(function () {
		res.clearCookie('connect.sid');
		res.redirect('/login');
	});
});

router.post('/chatbot', async (req, res) => {
	console.log(req.body);
	await db.query(
		'INSERT INTO chatbot SET ?',
		{
			name: req.body.name,
			number: req.body.number,
			gmail: req.body.email
		},
		(err, response) => {
			if (err) {
				console.log(err);
				return;
			} else {
				res.json({ message: 'Success' });
			}
		}
	);
});

router.post('/pagination', isloggedin, async (req, res) => {
	const currentPage = req.body.page || 1;
	const perPage = 5;

	await db.query(
		`SELECT * FROM studentdetails LIMIT ${perPage} OFFSET ${
			(currentPage - 1) * perPage
		}`,
		(err, response) => {
			if (err) {
				console.log(err);
				return;
			} else {
				res.json(response);
			}
		}
	);
});

router.get('/pagination/totalCount', isloggedin, async (req, res) => {
	await db.query('SELECT * FROM studentdetails', (err, response) => {
		if (err) {
			console.log(err);
			return;
		} else {
			res.json(response.length);
		}
	});
});

module.exports = router;
