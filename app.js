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

dotenv.config({ path: "./.env" });

const serviceAccount = require("./serviceAccountKey.json");
const { database } = require("firebase-admin");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mysql connected");
  }
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://classicneet-e8e04-default-rtdb.firebaseio.com",
});

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
app.use("/", authentication);



app.listen(8080, () => console.log(`SERVER IS RUNNING ON PORT 8080`));
