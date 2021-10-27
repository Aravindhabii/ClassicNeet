const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dotenv = require("dotenv");
const db = require("../database");
const multer = require("multer");
const { storage, cloudinary } = require("../cloudinary");
const { app } = require("firebase-admin");
const { response } = require("express");
const upload = multer({ storage });

dotenv.config({ path: "./.env" });

router.route("/home").get(async (req, res) => {
  await db.query("SELECT * FROM homeslider", async (error, response) => {
    var arr = [];
    if (error) {
      // console.log(imganame);
      console.log(error);
    } else {
      console.log(response.length);
      for (let i = 0; i <= response.length - 1; i++) {
        var image = {
          sliderimg: response[i].sliderimg,
          imgname: response[i].imgname,
        };
        arr.push(image);
      }
      await db.query("SELECT * FROM ourtoppers", async (error, response) => {
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
            };
            ourtoppers.push(image);
          }
          await db.query(
            "SELECT * FROM calendarevents",
            async (error, response) => {
              var calendar = [];
              if (error) {
                console.log(error);
              } else {
                for (let i = 0; i <= response.length - 1; i++) {
                  var c = {
                    date: response[i].date,
                    month: response[i].month,
                    event: response[i].event,
                  };
                  calendar.push(c);
                }
                await db.query(
                  "SELECT * FROM latest_updates",
                  async (err, response) => {
                    latestupdates = [];
                    if (err) {
                      console.log(err);
                    } else {
                      for (let i = 0; i <= response.length - 1; i++) {
                        var link = response[i].latestupdates;
                        // console.log(image)
                        latestupdates.push(link);
                      }

                      await db.query(
                        "SELECT * FROM studenttestimonials",
                        (err, response) => {
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
                          console.log(stutest);
                          res.render("home", {
                            img: arr,
                            ourtoppers,
                            calendar: calendar,
                            latestupdates,
                            stutest,
                          });
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

// slider Revolution Route
router
  .route("/admin/sliderrevolution")
  .get(async (req, res) => {
    await db.query("SELECT * FROM homeslider", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            sliderimg: response[i].sliderimg,
            imgname: response[i].imgname,
            cloudinaryName: response[i].cloudinaryname,
          };
          arr.push(image);
        }
      }
      res.render("admin/home/sliderRevolution", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      // await cloudinary.uploader.destroy(req.body.checkbox);
      await db.query(
        "UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ]
      );
      res.redirect("/admin/sliderrevolution");
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            // await cloudinary.uploader.destroy(check);
            await db.query(
              "UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ]
            );
          }
        }
      }
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
      res.redirect("/admin/sliderrevolution");
    }
  });

// latest updates route
router
  .route("/admin/latestupdates")
  .get(async (req, res) => {
    await db.query("SELECT * FROM latest_updates", (err, response) => {
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
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    console.log(link);
    await db.query(
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
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await db.query(
        "DELETE FROM latest_updates WHERE latestupdates = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
          }
        }
      );
      res.redirect("/admin/latestupdates");
    } else {
      req.body.checkbox.forEach(async (link) => {
        console.log(link);
        await db.query(
          "DELETE FROM latest_updates WHERE latestupdates = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log(response);
            }
          }
        );
      });
      res.redirect("/admin/latestupdates");
    }
  });

// Our Toppers Route
router
  .route("/admin/ourtoppers")
  .get(async (req, res) => {
    await db.query("SELECT * FROM ourtoppers", async (error, response) => {
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
  .post(upload.single("studentimg"), async (req, res) => {
    await db.query(
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
  .put(upload.single("sliderimg"), async (req, res) => {
    await db.query(
      "UPDATE ourtoppers SET studentimg = ? WHERE cloudinaryname = ?",
      [req.file.path, req.body.cloudinaryname]
    );
    res.redirect("/admin/ourtoppers");
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(
        "ClassicNeetAcademy/" + req.body.checkbox
      );
      await db.query(
        "DELETE FROM ourtoppers WHERE cloudinaryname = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/admin/ourtoppers");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await cloudinary.uploader.destroy("ClassicNeetAcademy/" + link);
        await db.query(
          "DELETE FROM ourtoppers WHERE cloudinaryname = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            }
          }
        );
      });
      res.redirect("/admin/ourtoppers");
    }
  });

//Neet Achivements Route
router
  .route("/admin/studenttestimonials")
  .get(async (req, res) => {
    await db.query("SELECT * FROM studenttestimonials", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].testimonialslink;
          // console.log(image)
          arr.push(link);
        }
        // console.log(response[0].latestupdates);
        res.render("admin/home/studentTestimonials", { link: arr });
      }
    });
  })
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    console.log(link);
    await db.query(
      "INSERT INTO studenttestimonials SET ?",
      { testimonialslink: link },
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
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await db.query(
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
      req.body.checkbox.forEach(async (link) => {
        console.log(link);
        await db.query(
          "DELETE FROM studenttestimonials WHERE testimonialslink = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log(response);
            }
          }
        );
      });
      res.redirect("/admin/studenttestimonials");
    }
  });

router
  .route("/admin/calendarevents")
  .get(async (req, res) => {
    await db.query("SELECT * FROM calendarevents", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var calendar = {
            date: response[i].date,
            month: response[i].month,
            event: response[i].event,
          };
          arr.push(calendar);
        }
        res.render("admin/home/calendarEvents", { calendar: arr });
      }
    });
  })
  .post(async (req, res) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    7;
    const month = monthNames[parseInt(req.body.date.split("-")[1]) - 1];
    const date = req.body.date.split("-")[2];
    const event = req.body.event;

    await db.query(
      "INSERT INTO calendarevents SET ?",
      {
        date,
        month,
        event,
      },
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
          res.redirect("/admin/calendarevents");
        }
      }
    );
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await db.query(
        "DELETE FROM calendarevents WHERE event = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
          }
        }
      );
      res.redirect("/admin/calendarevents");
    } else {
      req.body.checkbox.forEach(async (link) => {
        console.log(link);
        await db.query(
          "DELETE FROM calendarevents WHERE event = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              console.log(response);
            }
          }
        );
      });
      res.redirect("/admin/calendarevents");
    }
  });

router
  .route("/admin/neetachievements")
  .get(async (req, res) => {
    await db.query("SELECT * FROM neetacheivements", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        var seats = response[0].seats;
        var consecutiveyears = response[0].consecutiveyears;
        var successrate = response[0].successrate;
        var admissions = response[0].admissions;
        // console.log(image)
        res.render("admin/home/neetAchievements", {
          seats,
          consecutiveyears,
          successrate,
          admissions,
        });
      }
      // console.log(response[0].latestupdates);
    });
  })
  .post(async (req, res) => {
    const { seat, years, rate, admiss } = req.body;
    await db.query(
      "UPDATE neetacheivements SET ? WHERE id = 1",
      {
        seats: seat,
        consecutiveyears: years,
        successrate: rate,
        admissions: admiss,
      },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/admin/neetachievements");
        }
      }
    );
  });

router
  .route("/admin/neetachievements")
  .get(async (req, res) => {
    res.render("admin/home/studentTestimonials");
  })
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    console.log(link);
    await db.query(
      "INSERT INTO studenttestimonials SET ?",
      { testimonialslink: link },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/admin/studenttestimonials");
        }
      }
    );
  });

router.route("/courses").get(async (req, res) => {
  res.render("courses");
});

router
  .route("/admin/courses/neet")
  .get(async (req, res) => {
    await db.query("SELECT * FROM courseneet", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var cont = {
            overview: response[i].overview,
            methodology: response[i].methodology,
          };
          arr.push(cont);
        }
        res.render("admin/courses/courseNEET", { content: arr });
      }
    });
  })
  .post(async (req, res) => {
    const { overview, methodology } = req.body.content;
    await db.query(
      "INSERT INTO courseneet SET ?",
      { overview: overview, methodology: methodology },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.redirect("/admin/courses/neet");
        }
      }
    );
  })
  .delete(async (req, res) => {});

router.route("/aboutus").get(async (req, res) => {
  res.render("aboutus");
});

router.route("/coursesNEET").get(async (req, res) => {
  res.render("coursesNEET");
});
router.route("/coursesJEE").get(async (req, res) => {
  res.render("coursesJEE");
});
router.route("/coursesIIT&Medical").get(async (req, res) => {
  res.render("coursesIIT&Medical");
});
router.route("/coursesJEE").get(async (req, res) => {
  res.render("coursesJEE");
});
router.route("/Demovideos").get(async (req, res) => {
  res.render("Demovideos");
});

router.route("/results").get(async (req, res) => {
  res.render("results");
});

router
  .route("/admin/results/studentdetails")
  .get(async (req, res) => {
    await db.query("SELECT * FROM studentdetails", async (error, response) => {
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
          };
          arr.push(image);
        }
        res.render("admin/results/studentdetails", { students: arr });
      }
    });
  })
  .post(upload.single("studentimg"), async (req, res) => {
    await db.query(
      "INSERT INTO studentdetails SET ?",
      {
        name: req.body.name,
        collegename: req.body.collegeName,
        image: req.file.path,
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
    res.redirect("/admin/results/studentdetails");
  })
  .put(upload.single("sliderimg"), async (req, res) => {
    await db.query(
      "UPDATE studentdetails SET image = ? WHERE cloudinaryname = ?",
      [req.file.path, req.body.cloudinaryname]
    );
    res.redirect("/admin/results/studentdetails");
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(
        "ClassicNeetAcademy/" + req.body.checkbox
      );
      await db.query(
        "DELETE FROM studentdetails WHERE cloudinaryname = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/admin/results/studentdetails");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await cloudinary.uploader.destroy("ClassicNeetAcademy/" + link);
        await db.query(
          "DELETE FROM studentdetails WHERE cloudinaryname = ?",
          [link],
          (err, response) => {
            if (err) {
              console.log(err);
            }else{
              console.log(response);
            }
          }
        );
      });
      res.redirect("/admin/results/studentdetails");
    }
  });

router.route("/contactus").get(async (req, res) => {
  res.render("contactus");
});
router.route("/successstories").get(async (req, res) => {
  res.render("successStories2");
});
router.route("/404error").get(async (req, res) => {
  res.render("404error");
});

router.route("/admin");

module.exports = router;
