const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
const db = require('../database');
const multer = require('multer');
const { storage, cloudinary } = require('../cloudinary');
const upload = multer({ storage });

dotenv.config({ path: "./.env" });

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
				arr.push(image);
			}
			db.query('SELECT * FROM ourtoppers', (error, response) => {
				var ourtoppers = [];
				if (error) {
					console.log(error);
				} else {
					for (let i = 0; i <= response.length - 1; i++) {
						var image = {
							name: response[i].name,
							collegename: response[i].collegename,
							cloudinaryname: response[i].cloudinaryname,
							studentimg: response[i].studentimg
						};
						ourtoppers.push(image);
					}
					db.query('SELECT * FROM calendarevents', (error, response) => {
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
							db.query('SELECT * FROM latest_updates', (err, response) => {
								latestupdates = [];
								if (err) {
									console.log(err);
								} else {
									for (let i = 0; i <= response.length - 1; i++) {
										var link = response[i].latestupdates;
										// console.log(image)
										latestupdates.push(link);
									}

									// console.log(response[0].latestupdates);
									res.render('home', {
										img: arr,
										ourtoppers,
										calendar: calendar,
										latestupdates
									});
								}
							});
						}
					});
				}
			});
		}
	});
});


// slider Revolution Route
router
  .route("/admin/sliderrevolution")
  .get((req, res) => {
    db.query("SELECT * FROM homeslider", (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        console.log(response.length);
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            sliderimg: response[i].sliderimg,
            imgname: response[i].imgname,
            cloudinaryName: response[i].cloudinaryname,
          };
          arr.push(image);
        }
        console.log(arr);
        res.render("admin/home/sliderRevolution", { img: arr });
      }
    });
  })
  .post(upload.single("sliderimg"), (req, res) => {
    if (typeof (req.body.sliderimg === "string")) {
      cloudinary.uploader.destroy(req.body.checkbox);
      db.query(
        "UPDATE homeslider SET sliderimg = ? AND imgname = ? WHERE cloudinaryname = ?",
        [req.file.path, req.file.originalname, req.body.checkbox]
      );
      res.render("admin/home/sliderRevolution");
    } else {
      req.body.sliderimg.forEach((img, index1) => {
        0.3;
        req.body.checkbox.forEach(async (check, index2) => {
          if (index1 === index2) {
            console.log(check);
            await cloudinary.uploader.destroy(check);
            db.query(
              "UPDATE homeslider SET sliderimg ? WHERE cloudinaryname = ?",
              [req.file.path, check]
            );
          }
        });
      });
      res.render("admin/home/sliderRevolution");
    }
  });

// latest updates route
router
  .route("/admin/latestupdates")
  .get((req, res) => {
    db.query("SELECT * FROM latest_updates", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].latestupdates;
          // console.log(image)
          arr.push(link);
        }

        // console.log(response[0].latestupdates);
        res.render("admin/home/latestUpdates", { link: arr });
      }
    });
  })
  .post((req, res) => {
    const link = req.body.uploadlink;
    console.log(link);
    db.query(
      "INSERT INTO latest_updates SET ?",
      { latestupdates: link },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/admin/latestupdates");
        }
      }
    );
  })
  .delete((req, res) => {
    if (typeof req.body.checkbox === "string") {
      db.query(
        "DELETE FROM latest_updates WHERE latestupdates = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
            res.redirect("/admin/latestupdates");
          }
        }
      );
    } else {
      req.body.checkbox.forEach((link) => {
        console.log(link);
        db.query(
          "DELETE FROM latest_updates WHERE latestupdates = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log(response);
              res.redirect("/admin/latestupdates");
            }
          }
        );
      });
    }
  });

// Our Toppers Route
router
  .route("/admin/ourtoppers")
  .get((req, res) => {
    db.query("SELECT * FROM ourtoppers", (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            name: response[i].name,
            collegename: response[i].collegename,
            cloudinaryname: response[i].cloudinaryname,
            studentimg: response[i].studentimg,
          };
          arr.push(image);
        }
        res.render("admin/home/ourToppers", { students: arr });
      }
    });
  })
  .post(upload.single("sliderimg"), (req, res) => {
    db.query(
      "INSERT INTO ourtoppers SET ?",
      {
        name: req.body.name,
        collegename: req.body.collegeName,
        studentimg: req.file.path,
        cloudinaryname: req.file.filename.split("/")[1],
      },
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
        }
      }
    );
    res.redirect("/admin/ourtoppers");
  })
  .put(upload.single("sliderimg"), (req, res) => {
    db.query("UPDATE ourtoppers SET studentimg = ? WHERE cloudinaryname = ?", [
      req.file.path,
      req.body.cloudinaryname,
    ]);
    res.redirect("/admin/ourtoppers");
  });

//Neet Achivements Route
router
  .route("/admin/studenttestimonials")
  .get((req, res) => {
    db.query("SELECT * FROM studenttestimonials", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].latestupdates;
          // console.log(image)
          arr.push(link);
        }
        // console.log(response[0].latestupdates);
        res.render("admin/home/studentTestimonials", { link: arr });
      }
    });
  })
  .post((req, res) => {
    const link = req.body.uploadlink;
    console.log(link);
    db.query(
      "INSERT INTO studenttestimonials SET ?",
      { latestupdates: link },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/admin/studenttestimonials");
        }
      }
    );
  })
  .delete((req, res) => {
    if (typeof req.body.checkbox === "string") {
      db.query(
        "DELETE FROM studenttestimonials WHERE testimonialslink = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
            res.redirect("/admin/studenttestimonials");
          }
        }
      );
    } else {
      req.body.checkbox.forEach((link) => {
        console.log(link);
        db.query(
          "DELETE FROM studenttestimonials WHERE testimonialslink = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log(response);
              res.redirect("/admin/studenttestimonials");
            }
          }
        );
      });
    }
  });

router.route('/admin/studenttestimonials').get((req, res) => {
	res.render('admin/home/studentTestimonials');
});
router
	.route('/admin/calendarevents')
	.get((req, res) => {
		db.query('SELECT * FROM calendarevents', (error, response) => {
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
	.post((req, res) => {
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
		const month = monthNames[parseInt(req.body.date.split('-')[1]) - 1];
		const date = req.body.date.split('-')[2];
		const event = req.body.event;

		db.query(
			'INSERT INTO calendarevents SET ?',
			{
				date,
				month,
				event
			},
			(err, response) => {
				if (err) {
					console.log(err);
				} else {
					console.log(response);
					res.redirect('/admin/calendarevents');
				}
			}
		);
	});

router
	.route('/admin/studenttestimonials')
	.get((req, res) => {
		res.render('admin/home/studentTestimonials');
	})
	.post((req, res) => {});

router.route("/aboutus").get((req, res) => {
  res.render("aboutus");
});
router.route("/coursesNEET").get((req, res) => {
  res.render("coursesNEET");
});
router.route("/coursesIIT&Medical").get((req, res) => {
  res.render("coursesIIT&Medical");
});
router.route("/Demovideos").get((req, res) => {
  res.render("Demovideos");
});
router.route("/results").get((req, res) => {
  res.render("results");
});
router.route("/contactus").get((req, res) => {
  res.render("contactus");
});
router.route("/successstories").get((req, res) => {
  res.render("successStories");
});
router.route("/404error").get((req, res) => {
  res.render("404error");
});

module.exports = router;
