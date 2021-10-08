const express = require("express");
const fs = require("fs");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const { authenticate } = require("passport");
const userRoutes = require("./routes/userRoute");
const authentication = require("./routes/authentication");
const admin = require("firebase-admin");
const mysql = require("mysql");
const dotenv = require("dotenv");
const mariadb = require("mariadb");

dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: "classicneetauth",
});

// db.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Mysql connected');
// 	}
// });

const app = express();

const sessionConfig = {
  secret: "thisshouldbeasecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60,
    maxAge: 1000 * 60 * 60,
  },
};

app.use(session(sessionConfig));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(flash());

app.use("/", userRoutes);
app.use("/ClassicNeetAccademy", authentication);

app.get("/viewcount", (req, res) => {});

app.use("/", userRoutes);
app.use("/", authentication);

//cloudinary
// const multer = require('multer');
// const { storage } = require('./cloudianry');
// const upload = multer({ storage });
// app
//   .get("/homeslider", (req, res) => {
//     res.render("cloudinary");
//   })
//   .post("/homeslider", upload.single("sliderimg"), (req, res) => {
//     console.log(req.file.path);
// 	console.log(req.file.fieldname)
//   });

app.listen(8080, () => console.log(`SERVER IS RUNNING ON PORT 8080`));
