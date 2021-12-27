const express = require("express");
const fs = require("fs");
const router = express.Router();
const mysql = require("mysql");
const dotenv = require("dotenv");
const db = require("../database");
const multer = require("multer");
const { storage, cloudinary } = require("../cloudinary");
const { response } = require("express");
const upload = multer({ storage });
var sizeOf = require("image-size");
const { isloggedin, flash } = require("../middleware");
const nodemailer = require("nodemailer");

router
  .route("/example")
  .get(async (req, res) => {
    res.render("admin/courses/empty");
  })
  .post(async (req, res) => {
    sizeOf(req.body, function (err, dimensions) {});
  });

dotenv.config({ path: "./.env" });

router.route("/").get(async (req, res) => {
  await db.query("SELECT * FROM homeslider", async (error, response) => {
    var arr = [];
    if (error) {
      console.log(error);
    } else {
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
              score: response[i].score,
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
                        var link1 = response[i].link;
                        latestupdates.push({ link, link1 });
                      }

                      await db.query(
                        "SELECT * FROM studenttestimonials",
                        async (err, response) => {
                          stutest = [];
                          if (err) {
                            console.log(err);
                          } else {
                            for (let i = 0; i <= response.length - 1; i++) {
                              var link = response[i].testimonialslink;
                              stutest.push(link);
                            }
                          }
                          await db.query(
                            "SELECT * FROM neetacheivements",
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
                                    admissions: response[i].admissions,
                                  };
                                  neetachieve.push(neetvar);
                                }
                              }
                              await db.query(
                                "SELECT * FROM marquee",
                                async (error, response) => {
                                  marq = [];
                                  if (error) {
                                    console.log(error);
                                  } else {
                                    for (
                                      let i = 0;
                                      i <= response.length - 1;
                                      i++
                                    ) {
                                      var image = {
                                        text: response[i].text,
                                        link: response[i].linkbtn,
                                        id: response[i].id,
                                      };
                                      marq.push(image);
                                    }
                                  }
                                  await db.query(
                                    "SELECT * FROM loadingimg",
                                    async (error, response) => {
                                      if (error) {
                                        console.log(error);
                                      } else {
                                        var state = response[0].state;
                                      }
                                      await db.query(
                                        "SELECT * FROM questionbank",
                                        (error, response) => {
                                          bank = [];
                                          if (error) {
                                            req.flash(
                                              "error",
                                              "Error occurred while adding"
                                            );
                                            console.log(error);
                                          } else {
                                            var image = {
                                              text: response[0].text,
                                              link: response[0].link,
                                              id: response[0].id,
                                            };
                                            bank.push(image);
                                          }
                                          res.render("home", {
                                            img: arr,
                                            ourtoppers,
                                            calendar: calendar,
                                            latestupdates,
                                            stutest,
                                            neetachieve,
                                            marq,
                                            state,
                                            bank,
                                          });
                                        }
                                      );
                                    }
                                  );
                                }
                              );
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

router.route("/admin").get(isloggedin, async (req, res) => {
  res.redirect("/admin/sliderrevolution");
});

// slider Revolution Route
router
  .route("/admin/sliderrevolution")
  .get(flash, isloggedin, async (req, res) => {
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
      await cloudinary.uploader.destroy(req.body.checkbox);
      await db.query(
        "UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while Updating");
            console.log(err);
            res.redirect("/admin/sliderrevolution");
          } else {
            req.flash("success", "Image successfully updated");
            res.redirect("/admin/sliderrevolution");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox}`
            );
            await db.query(
              "UPDATE homeslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while Updating");
                  console.log(err);
                  res.redirect("/admin/sliderrevolution");
                  return;
                }
              }
            );
          }
        }
      }
      req.flash("success", "Images successfully updated");
      res.redirect("/admin/sliderrevolution");
    }
  });

// latest updates route
router
  .route("/admin/latestupdates")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM latest_updates", (err, response) => {
      arr = [];
      if (err) {
        req.flash("error", "Error occurred while adding");
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].latestupdates;
          var link1 = response[i].link;
          arr.push({ link, link1 });
        }
        res.render("admin/home/latestUpdates", { arr });
      }
    });
  })
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    const link1 = req.body.link || "no link";
    await db.query(
      "INSERT INTO latest_updates SET ?",
      { latestupdates: link, link: link1 },
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
        } else {
          req.flash("success", "Added successfully");
          res.redirect("/admin/latestupdates");
        }
      }
    );
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await db.query(
        "DELETE FROM latest_updates WHERE link = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/latestupdates");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/latestupdates");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await db.query(
          "DELETE FROM latest_updates WHERE link = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/latestupdates");
              return;
            } else {
              req.flash("success", "Successfully Deleted");
            }
          }
        );
      });
      res.redirect("/admin/latestupdates");
    }
  });

router
  .route("/admin/marquee")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM marquee", (error, response) => {
      arr = [];
      if (error) {
        req.flash("error", "Error occurred while adding");
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            text: response[i].text,
            link: response[i].linkbtn,
            id: response[i].id,
          };
          arr.push(image);
        }
        res.render("admin/home/marquee", { marquee: arr });
      }
    });
  })
  .post(async (req, res) => {
    const text = req.body.text;
    const link = req.body.link;
    const id = req.body.id;
    await db.query(
      "UPDATE marquee SET text = ?,  linkbtn = ? WHERE id = ?",
      [text, link, id],
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
        } else {
          req.flash("success", "Updated successfully");
          res.redirect("/admin/marquee");
        }
      }
    );
  });

router
  .route("/admin/questionbank")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM questionbank", (error, response) => {
      arr = [];
      if (error) {
        req.flash("error", "Error occurred while adding");
        console.log(error);
      } else {
        var image = {
          text: response[0].text,
          link: response[0].link,
          id: response[0].id,
        };
        arr.push(image);

        res.render("admin/home/questionbank", { marquee: arr });
      }
    });
  })
  .post(async (req, res) => {
    const text = req.body.text;
    const link = req.body.link;
    const id = req.body.id;
    await db.query(
      "UPDATE questionbank SET text = ?, link = ? WHERE id = ?",
      [text, link, id],
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
        } else {
          req.flash("success", "Updated successfully");
          res.redirect("/admin/questionbank");
        }
      }
    );
  });

router
  .route("/admin/loadingimg")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM loadingimg", (error, response) => {
      if (error) {
        req.flash("error", "Error occurred while adding");
        console.log(error);
      } else {
        var state = response[0].state;

        res.render("admin/home/loadingimg", { state });
      }
    });
  })
  .post(async (req, res) => {
    const state = req.body.currentstate === "active" ? "active" : "inactive";
    await db.query(
      "UPDATE loadingimg SET state = ? WHERE id = 1",
      [state],
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
        } else {
          req.flash("success", "Updated successfully");
          res.redirect("/admin/loadingimg");
        }
      }
    );
  });

// Our Toppers Route
router
  .route("/admin/ourtoppers")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM ourtoppers", async (error, response) => {
      var arr = [];
      if (error) {
        req.flash("error", "Error occurred while adding");
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            name: response[i].name,
            collegename: response[i].collegename,
            cloudinaryname: response[i].cloudinaryname,
            studentimg: response[i].studentimg,
            score: response[i].score,
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
        score: req.body.score,
        cloudinaryname: req.file.filename.split("/")[1],
      },
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/ourtoppers");
        } else {
          req.flash("success", "Added successfully");
          res.redirect("/admin/ourtoppers");
        }
      }
    );
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
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/ourtoppers");
          } else {
            req.flash("success", "Successfully Deleted");
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
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/ourtoppers");
              return;
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/ourtoppers");
    }
  });

//Students testimonial Route
router
  .route("/admin/studenttestimonials")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM studenttestimonials", (err, response) => {
      arr = [];
      if (err) {
        req.flash("error", "Error occurred while adding");
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].testimonialslink;
          arr.push(link);
        }
        res.render("admin/home/studentTestimonials", { link: arr });
      }
    });
  })
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    await db.query(
      "INSERT INTO studenttestimonials SET ?",
      { testimonialslink: link },
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/studenttestimonials");
        } else {
          req.flash("success", "Added successfully");
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
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/studenttestimonials");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/studenttestimonials");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await db.query(
          "DELETE FROM studenttestimonials WHERE testimonialslink = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/studenttestimonials");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/studenttestimonials");
    }
  });

router
  .route("/admin/calendarevents")
  .get(flash, isloggedin, async (req, res) => {
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
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/calendarevents");
        } else {
          req.flash("success", "Added successfully");
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
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/calendarevents");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/calendarevents");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await db.query(
          "DELETE FROM calendarevents WHERE event = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/calendarevents");
              return;
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/calendarevents");
    }
  });

router
  .route("/admin/neetachievements")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM neetacheivements", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        var seats = response[0].seats;
        var consecutiveyears = response[0].consecutiveyears;
        var successrate = response[0].successrate;
        var admissions = response[0].admissions;
        res.render("admin/home/neetAchievements", {
          seats,
          consecutiveyears,
          successrate,
          admissions,
        });
      }
    });
  })
  .post(async (req, res) => {
    const { seat, years, rate, admissions } = req.body;
    await db.query(
      "UPDATE neetacheivements SET ? WHERE id = 1",
      {
        seats: seat,
        consecutiveyears: years,
        successrate: rate,
        admissions: admissions,
      },
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/neetachievements");
        } else {
          req.flash("success", "Successfully Updated");
          res.redirect("/admin/neetachievements");
        }
      }
    );
  });

router.route("/courses").get(async (req, res) => {
  res.render("courses");
});

router.route("/aboutus").get(async (req, res) => {
  var folderArray = [];
  fs.readdirSync("public/images/gallery").forEach((folder) => {
    folderArray.push(folder);
  });
  await db.query("SELECT * FROM history", async (error, response) => {
    var arr = [];
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var cont = {
          content: response[i].content,
          year: response[i].year,
        };
        arr.push(cont);
      }
      await db.query("SELECT * FROM foundervideo", (error, response) => {
        if (error) {
          req.flash("error", "Error occurred while adding");
          console.log(error);
        } else {
          var link = response[0].link;
        }
        res.render("aboutus", {
          content: arr,
          folderArray: folderArray.sort(),
          url: link,
        });
      });
    }
  });
});

router.get("/aboutus/pagination/:folder", async (req, res) => {
  const imgs = await fs.readdirSync(
    `public/images/gallery/${req.params.folder}`
  );
  res.json(imgs);
});

router.get("/aboutus/pagination/totalcount/:year", async (req, res) => {
  const imgs = await fs.readdirSync(`public/images/gallery/${req.params.year}`);
  res.json(imgs.length);
});

router
  .route("/admin/aboutus/history")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM history", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var cont = {
            content: response[i].content,
            year: response[i].year,
          };
          arr.push(cont);
        }
        res.render("admin/aboutus/history", { content: arr });
      }
    });
  })
  .post(async (req, res) => {
    const content = req.body.content;
    const year = req.body.year;
    await db.query(
      "INSERT INTO history SET ?",
      { content: content, year: year },
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/aboutus/history");
        } else {
          req.flash("success", "Added successfully");
          res.redirect("/admin/aboutus/history");
        }
      }
    );
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      const checkcontent = req.body.checkbox.split("**")[0];
      const checkyear = req.body.checkbox.split("**")[1];
      await db.query(
        "DELETE FROM history WHERE content = ? AND year = ?",
        [checkcontent, checkyear],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/aboutus/history");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/aboutus/history");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (content) => {
        var checkcontent = content.split("**")[0];
        var checkyear = content.split("**")[1];
        await db.query(
          `DELETE FROM history WHERE content = ? AND year = ?`,
          [checkcontent, checkyear],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/aboutus/history");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/aboutus/history");
    }
  });

router
  .route("/admin/aboutus/historyupdate")
  .post(isloggedin, async (req, res) => {
    const oldcont = req.body.oldname.split("**")[0];
    const oldyear = req.body.oldname.split("**")[1];
    await db.query(
      "UPDATE history SET content = ?, year = ? WHERE content = ? AND year = ?",
      [req.body.content, req.body.year, oldcont, oldyear],
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while updating");
          console.log(err);
          res.redirect("/admin/aboutus/history");
        } else {
          req.flash("success", "Successfully Updated");
          res.redirect("/admin/aboutus/history");
        }
      }
    );
  });

router
  .route("/admin/aboutus/foundervideo")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM foundervideo", (error, response) => {
      if (error) {
        req.flash("error", "Error occurred while adding");
        console.log(error);
      } else {
        var image = {
          id: response[0].id,
          link: response[0].link,
        };
        res.render("admin/aboutus/foundervideo", { url: image });
      }
    });
  })
  .post(async (req, res) => {
    const link = req.body.text;
    const id = req.body.id;
    await db.query(
      "UPDATE foundervideo SET link = ? WHERE id = ?",
      [link, id],
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
        } else {
          req.flash("success", "Updated successfully");
          res.redirect("/admin/aboutus/foundervideo");
        }
      }
    );
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
  await db.query("SELECT * FROM demovideos", (err, response) => {
    arr = [];
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var link = response[i].videolink;
        arr.push(link);
      }
      db.query("SELECT * FROM demoimages", async (error, response) => {
        if (error) {
          console.log(error);
        } else {
          var image = {
            sliderimg: response[0].sliderimg,
            imgname: response[0].imgname,
            cloudinaryName: response[0].cloudinaryname,
          };
        }
        res.render("demovideos", { link: arr, img: image });
      });
    }
  });
});

router
  .route("/admin/demovideos")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM demovideos", (err, response) => {
      arr = [];
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var link = response[i].videolink;
          arr.push(link);
        }
        res.render("admin/demovideos/Demovideos", { link: arr });
      }
    });
  })
  .post(async (req, res) => {
    const link = req.body.uploadlink;
    await db.query(
      "INSERT INTO demovideos SET ?",
      { videolink: link },
      (err, results) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/demovideos");
        } else {
          req.flash("success", "Successfully Added");
          res.redirect("/admin/demovideos");
        }
      }
    );
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await db.query(
        "DELETE FROM demovideos WHERE videolink = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while deleting");
            console.log(err);
            res.redirect("/admin/demovideos");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/demovideos");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await db.query(
          "DELETE FROM demovideos WHERE videolink = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while deleting");
              console.log(err);
              res.redirect("/admin/demovideos");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/demovideos");
    }
  });

//demovideos bannerpic

router
  .route("/admin/bannerimg")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM demoimages", async (error, response) => {
      if (error) {
        console.log(error);
      } else {
        var image = {
          sliderimg: response[0].sliderimg,
          imgname: response[0].imgname,
          cloudinaryName: response[0].cloudinaryname,
        };
      }
      res.render("admin/demovideos/headimage", { img: image });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    await cloudinary.uploader.destroy(req.body.checkbox);
    await db.query(
      "UPDATE demoimages SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
      [
        req.files[0].path,
        req.files[0].originalname,
        req.files[0].filename.split("/")[1],
        req.body.checkbox,
      ],
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while Updating");
          console.log(err);
          res.redirect("/admin/bannerimg");
        } else {
          req.flash("success", "Image successfully updated");
          res.redirect("/admin/bannerimg");
        }
      }
    );
  });

router.route("/results").get(async (req, res) => {
  await db.query("SELECT * FROM studentdetails", async (error, response) => {
    var arr = [];
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var image = response[i].year;
        arr.push(image);
      }
      let uniqueChars = [...new Set(arr)].sort();

      await db.query("SELECT * FROM resultslider", async (error, response) => {
        var slider = [];
        if (error) {
          console.log(error);
        } else {
          for (let i = 0; i <= response.length - 1; i++) {
            var image1 = {
              sliderimg: response[i].sliderimg,
              imgname: response[i].imgname,
              cloudinaryName: response[i].cloudinaryname,
            };
            slider.push(image1);
          }
          res.render("results", {
            students: arr,
            slider,
            year: uniqueChars,
          });
        }
      });
    }
  });
});

router.get("/results/pagination/:year", async (req, res) => {
  await db.query(
    "SELECT * FROM studentdetails WHERE year = ?",
    [req.params.year],
    async (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.json(response);
      }
    }
  );
});

router
  .route("/admin/results/studentdetails")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM studentdetails", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = response[i].year;
          arr.push(image);
        }
        let uniqueChars = [...new Set(arr)].sort();
        res.render("admin/results/studentdetails", {
          year: uniqueChars.reverse(),
        });
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
        year: req.body.year,
        cloudinaryname: req.file.filename.split("/")[1],
      },
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/results/studentdetails");
        } else {
          req.flash("success", "Successfully Added");
          res.redirect("/admin/results/studentdetails");
        }
      }
    );
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
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/results/studentdetails");
            return;
          } else {
            req.flash("success", "Successfully Deleted");
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
              req.flash("error", "Error occurred while adding");
              console.log(err);
              res.redirect("/admin/results/studentdetails");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/results/studentdetails");
    }
  });
// admin result images

router
  .route("/year")
  .post(async (req, res) => {
    await db.query("INSERT INTO year SET ?", req.body, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        req.flash("success", "Year Successfully Added");
        res.redirect("/admin/results/studentdetails");
      }
    });
  })
  .delete(async (req, res) => {
    await db.query(
      "DELETE FROM year WHERE year = ?",
      [req.body.year],
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          req.flash("success", "Year Successfully Deleted");
          res.redirect("/admin/results/studentdetails");
        }
      }
    );
  });

router
  .route("/admin/results/studentupdate")
  .post(isloggedin, async (req, res) => {
    await db.query(
      "UPDATE studentdetails SET name = ?, collegename = ? WHERE cloudinaryname = ?",
      [req.body.stdname, req.body.clgname, req.body.oldname],
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while updating");
          console.log(err);
          res.redirect("/admin/results/studentdetails");
        } else {
          req.flash("success", "Successfully Updated");
          res.redirect("/admin/results/studentdetails");
        }
      }
    );
  });

router
  .route("/admin/results/images")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM resultslider", async (error, response) => {
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
      res.render("admin/results/images", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(req.body.checkbox);
      await db.query(
        "UPDATE resultslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/results/images");
          } else {
            req.flash("success", "Image Successfully Updated");
            res.redirect("/admin/results/images");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox[i]}`
            );
            await db.query(
              "UPDATE resultslider SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while adding");
                  console.log(err);
                  res.redirect("/admin/results/images");
                  return;
                } else {
                }
              }
            );
          }
        }
      }
      req.flash("success", "Image Successfully Updated");
      res.redirect("/admin/results/images");
    }
  });

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "classicneetslm@gmail.com",
    pass: "Classic@123",
  },
});

router
  .route("/contactus")
  .get(flash, async (req, res) => {
    res.render("contactus");
  })
  .post(async (req, res) => {
    const email = req.body.email;
    const comment = req.body.message;
    const name = req.body.name;
    const phone = req.body.phone;

    let mailOptions = {
      from: "classicneetslm@gmail.com",
      to: "info@classicneetacademy.com",
      subject: "Comments from user",
      html:
        `<h1>${name}</h1>` +
        `<h2> ${email} </h2>` +
        `<h3>${phone}</h3>` +
        `<p>${comment}</p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        req.flash("error", "Something went wrong");
        res.redirect("/contactus");
      } else {
        console.log(info);
        req.flash("success", "Mail sent successfully");
        res.redirect("/contactus");
      }
    });
  });

router.route("/successstories").get(async (req, res) => {
  await db.query("SELECT * FROM successstories", async (error, response) => {
    var arr = [];
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var image = {
          studentimg: response[i].image,
          cloudinaryname: response[i].cloudinaryname,
          youtubelink: response[i].youtubelink,
          studentname: response[i].studentname,
        };
        arr.push(image);
      }
      await db.query(
        "SELECT * FROM parenttestimonials",
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
                studentname: response[i].studentname,
              };
              parent.push(imageparent);
            }
            res.render("successStories2", {
              students: arr,
              parenttestimonials: parent,
            });
          }
        }
      );
    }
  });
});

router
  .route("/admin/successstories/testimonials")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM successstories", async (error, response) => {
      var arr = [];
      if (error) {
        console.log(error);
      } else {
        for (let i = 0; i <= response.length - 1; i++) {
          var image = {
            studentimg: response[i].image,
            cloudinaryname: response[i].cloudinaryname,
            youtubelink: response[i].youtubelink,
            studentname: response[i].studentname,
          };
          arr.push(image);
        }
        res.render("admin/successstories/testimonials", { students: arr });
      }
    });
  })
  .post(upload.single("studentimg"), async (req, res) => {
    await db.query(
      "INSERT INTO successstories SET ?",
      {
        youtubelink: req.body.youtubelink,
        image: req.file.path,
        cloudinaryname: req.file.filename.split("/")[1],
        studentname: req.body.studentname,
      },
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/successstories/testimonials");
        } else {
          req.flash("success", "Successfully Added");
          res.redirect("/admin/successstories/testimonials");
        }
      }
    );
  })
  .put(upload.single("sliderimg"), async (req, res) => {
    await db.query(
      "UPDATE successstories SET image = ? WHERE cloudinaryname = ?",
      [req.file.path, req.body.cloudinaryname]
    );
    res.redirect("/admin/successstories/studentdetails");
  })
  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(
        "ClassicNeetAcademy/" + req.body.checkbox
      );
      await db.query(
        "DELETE FROM successstories WHERE cloudinaryname = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/successstories/testimonials");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/successstories/testimonials");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await cloudinary.uploader.destroy("ClassicNeetAcademy/" + link);
        await db.query(
          "DELETE FROM successstories WHERE cloudinaryname = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while adding");
              console.log(err);
              res.redirect("/admin/successstories/testimonials");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/successstories/testimonials");
    }
  });

router
  .route("/admin/successstories/parenttestimonials")
  .get(flash, isloggedin, async (req, res) => {
    await db.query(
      "SELECT * FROM parenttestimonials",
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
              studentname: response[i].studentname,
            };
            arr.push(image);
          }
          res.render("admin/successstories/parenttestimonial", {
            students: arr,
          });
        }
      }
    );
  })
  .post(upload.single("studentimg"), async (req, res) => {
    await db.query(
      "INSERT INTO parenttestimonials SET ?",
      {
        youtubelink: req.body.youtubelink,
        image: req.file.path,
        cloudinaryname: req.file.filename.split("/")[1],
        studentname: req.body.studentname,
      },
      (err, response) => {
        if (err) {
          req.flash("error", "Error occurred while adding");
          console.log(err);
          res.redirect("/admin/successstories/parenttestimonials");
        } else {
          req.flash("success", "Successfully Added");
          res.redirect("/admin/successstories/parenttestimonials");
        }
      }
    );
  })

  .delete(async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(
        "ClassicNeetAcademy/" + req.body.checkbox
      );
      await db.query(
        "DELETE FROM parenttestimonials WHERE cloudinaryname = ?",
        [req.body.checkbox],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/successstories/parenttestimonials");
          } else {
            req.flash("success", "Successfully Deleted");
            res.redirect("/admin/successstories/parenttestimonials");
          }
        }
      );
    } else {
      req.body.checkbox.forEach(async (link) => {
        await cloudinary.uploader.destroy("ClassicNeetAcademy/" + link);
        await db.query(
          "DELETE FROM parenttestimonials WHERE cloudinaryname = ?",
          [link],
          (err, response) => {
            if (err) {
              req.flash("error", "Error occurred while adding");
              console.log(err);
              res.redirect("/admin/successstories/parenttestimonials");
              return;
            } else {
            }
          }
        );
      });
      req.flash("success", "Successfully Deleted");
      res.redirect("/admin/successstories/parenttestimonials");
    }
  });

  router
  .route("/admin/branch/salem")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM branchone", async (error, response) => {
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
      res.render("admin/branch/salem", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(`ClassicNeetAcademy/${req.body.checkbox}`);
      await db.query(
        "UPDATE branchone SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while Updating");
            console.log(err);
            res.redirect("/admin/branch/salem");
          } else {
            req.flash("success", "Image successfully updated");
            res.redirect("/admin/branch/salem");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox[i]}`
            );
            await db.query(
              "UPDATE branchone SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while Updating");
                  console.log(err);
                  res.redirect("/admin/branch/salem");
                  return;
                }
              }
            );
          }
        }
      }
      req.flash("success", "Images successfully updated");
      res.redirect("/admin/branch/salem");
    }
  });


  router
  .route("/admin/branch/namakkal")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM branchtwo", async (error, response) => {
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
      res.render("admin/branch/namakkal", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(`ClassicNeetAcademy/${req.body.checkbox}`);
      await db.query(
        "UPDATE branchtwo SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while Updating");
            console.log(err);
            res.redirect("/admin/branch/namakkal");
          } else {
            req.flash("success", "Image successfully updated");
            res.redirect("/admin/branch/namakkal");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox[i]}`
            );
            await db.query(
              "UPDATE branchtwo SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while Updating");
                  console.log(err);
                  res.redirect("/admin/branch/namakkal");
                  return;
                }
              }
            );
          }
        }
      }
      req.flash("success", "Images successfully updated");
      res.redirect("/admin/branch/namakkal");
    }
  });

  router
  .route("/admin/branch/dharmapuri")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM branchthree", async (error, response) => {
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
      res.render("admin/branch/dharmapuri", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(`ClassicNeetAcademy/${req.body.checkbox}`);
      await db.query(
        "UPDATE branchthree SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/branch/dharmapuri");
          } else {
            req.flash("success", "Image Successfully Updated");
            res.redirect("/admin/branch/dharmapuri");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox[i]}`
            );
            await db.query(
              "UPDATE branchthree SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while adding");
                  console.log(err);
                  res.redirect("/admin/branch/dharmapuri");
                  return;
                } else {
                }
              }
            );
          }
        }
      }
      req.flash("success", "Image Successfully Updated");
      res.redirect("/admin/branch/dharmapuri");
    }
  });

  router
  .route("/admin/branch/vellore")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM branchfour", async (error, response) => {
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
      res.render("admin/branch/vellore", { img: arr });
    });
  })
  .post(upload.array("sliderimg"), async (req, res) => {
    if (typeof req.body.checkbox === "string") {
      await cloudinary.uploader.destroy(`ClassicNeetAcademy/${req.body.checkbox}`);
      await db.query(
        "UPDATE branchfour SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
        [
          req.files[0].path,
          req.files[0].originalname,
          req.files[0].filename.split("/")[1],
          req.body.checkbox,
        ],
        (err, response) => {
          if (err) {
            req.flash("error", "Error occurred while adding");
            console.log(err);
            res.redirect("/admin/branch/vellore");
          } else {
            req.flash("success", "Image Successfully Updated");
            res.redirect("/admin/branch/vellore");
          }
        }
      );
    } else {
      for (let i = 0; i <= req.files.length - 1; i++) {
        for (let j = 0; j <= req.body.checkbox.length - 1; j++) {
          if (i === j) {
            await cloudinary.uploader.destroy(
              `ClassicNeetAcademy/${req.body.checkbox[i]}`
            );
            await db.query(
              "UPDATE branchfour SET sliderimg = ?, imgname = ?, cloudinaryname = ? WHERE cloudinaryname = ?",
              [
                req.files[j].path,
                req.files[j].originalname,
                req.files[j].filename.split("/")[1],
                req.body.checkbox[j],
              ],
              (err, response) => {
                if (err) {
                  req.flash("error", "Error occurred while adding");
                  console.log(err);
                  res.redirect("/admin/branch/vellore");
                  return;
                } else {
                }
              }
            );
          }
        }
      }
      req.flash("success", "Image Successfully Updated");
      res.redirect("/admin/branch/vellore");
    }
  });


router
  .route("/admin/chatbot")
  .get(flash, isloggedin, async (req, res) => {
    await db.query("SELECT * FROM chatbot", (err, response) => {
      var arr = [];
      if (err) {
        console.log(err);
      } else {
        res.render("admin/chatbot/chatbot", { chatbot: response });
      }
    });
  })
  .delete(async (req, res) => {
    await db.query("DELETE FROM chatbot", (err, response) => {
      if (err) {
        req.flash("error", "Error occurred while deleting");
        console.log(err);
        res.redirect("/admin/chatbot");
      } else {
        req.flash("success", "Successfully Deleted");
        res.redirect("/admin/chatbot");
      }
    });
  });

router.route("/chatbotdelete").post(async (req, res) => {
  await db.query(
    "DELETE FROM chatbot WHERE name = ? AND gmail = ?",
    [req.body.stuname, req.body.gmail],
    (err, response) => {
      if (err) {
        req.flash("error", "Error occurred while deleting");
        console.log(err);
        res.redirect("/admin/chatbot");
      } else {
      }
    }
  );
});

router.post("/signout", isloggedin, (req, res) => {
  req.session.destroy(function () {
    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
});

router.get("/chatbot/:name/:email/:number", async (req, res) => {
  const date = new Date();
  await db.query(
    "INSERT INTO chatbot SET ?",
    {
      name: req.params.name,
      number: req.params.number,
      gmail: req.params.email,
      date:
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
    },
    (err, response) => {
      if (err) {
        console.log(err);
        return;
      } else {
      }
    }
  );
});

router.post("/pagination", isloggedin, async (req, res) => {
  const currentPage = req.body.page || 1;
  const perPage = 5;
  const currentYear = req.body.year;

  await db.query(
    `SELECT * FROM studentdetails WHERE year = ${currentYear} LIMIT ${perPage} OFFSET ${
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

router.get("/chatbotresponce", async (req, res) => {
  await db.query(`SELECT * FROM chatbot`, (err, response) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.json(response);
    }
  });
});

router.get("/pagination/totalCount/:year", isloggedin, async (req, res) => {
  await db.query(
    `SELECT * FROM studentdetails where year = ${req.params.year}`,
    (err, response) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.json(response.length);
      }
    }
  );
});

//for sql pagination

router.get("/sql/homeslider", isloggedin, async (req, res) => {
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
    res.json(arr);
  });
});

router.get("/sql/latestupdates", isloggedin, async (req, res) => {
  await db.query("SELECT * FROM latest_updates", (err, response) => {
    arr = [];
    if (err) {
      req.flash("error", "Error occurred while adding");
      console.log(err);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var link = response[i].latestupdates;
        var link1 = response[i].link;
        arr.push({ link, link1 });
      }
      res.json(arr);
    }
  });
});

router.get("/sql/calendarevents", isloggedin, async (req, res) => {
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
      res.json(arr);
    }
  });
});

router.get("/sql/ourtoppers", async (req, res) => {
  await db.query("SELECT * FROM ourtoppers", async (error, response) => {
    var arr = [];
    if (error) {
      req.flash("error", "Error occurred while adding");
      console.log(error);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var image = {
          name: response[i].name,
          collegename: response[i].collegename,
          cloudinaryname: response[i].cloudinaryname,
          studentimg: response[i].studentimg,
          score: response[i].score,
        };
        arr.push(image);
      }
      res.json(arr);
    }
  });
});

router.get("/sql/history", async (req, res) => {
  await db.query("SELECT * FROM history", async (error, response) => {
    var arr = [];
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i <= response.length - 1; i++) {
        var cont = {
          content: response[i].content,
          year: response[i].year,
        };
        arr.push(cont);
      }
      res.json(arr);
    }
  });
});

module.exports = router;
