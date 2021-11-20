const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
var cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoute");
const authentication = require("./routes/authentication");
const db = require("./database");
const methodOverride = require("method-override");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// db.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 		setTimeout(handleDisconnect, 2000);
// 	} else {
// 		console.log('Mysql connected');
// 	}
// });

function handleDisconnect() {
  db.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      db.end();
      setTimeout(handleDisconnect, 3000);
    } else {
      console.log("Mysql connected");
    }
  });

  db.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      db.end();
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

const app = express();
app.use(express.json());

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
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(flash());

// app.get('/flash', function(req, res){
// 	// Set a flash message by passing the key, followed by the value, to req.flash().
// 	req.flash('info', 'Flash is back!')
// 	res.redirect('/');
//   });

//   app.get('/', function(req, res){
// 	// Get an array of flash messages by passing the key to req.flash()
// 	res.send('hello from / ', { });
//   });

// app.use( (req, res,next) => {
// 	console.log("hello");
//   // req.session.success = req.flash('success');
//   // req.session.success = req.flash('error');
// 	res.locals.success = req.flash('success');
// 	res.locals.error = req.flash('error');
// 	console.log('everything works fine');
// 	next();
// });

// const flasher = (req,res,next)=>{
// 	res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
// }

// app.use(function() {
// 	app.use(cookieParser('keyboard cat'));
// 	app.use(session({ cookie: { maxAge: 60000 }}));
// 	app.use(flash());
// });

// req.flash('error', 'You do not have permission to do that!');
// req.flash('success', 'Successfully made a new campground!');

app.use("/", userRoutes);
app.use("/", authentication);

app.get("/fun", (req, res) => {
  req.flash("success", "you have been successfully loggedin");
  res.render("404error");
});
app.get("/stories", (req, res) => {
  res.render("successStories");
});

app.get("*", (req, res) => {
  res.render("404error");
});

app.listen(process.env.PORT, () =>
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
);
module.exports = {
  apps: [
    {
      script: "app.js",
      watch: ["server", "client"],
      // Delay between restart
      watch_delay: 1000,
      ignore_watch: ["node_modules", "client/img"],
    },
  ],
};
