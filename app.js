const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
var cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoute');
const authentication = require('./routes/authentication');
const db = require('./database');
const methodOverride = require('method-override');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Mysql connected');
	}
});

const app = express();

const sessionConfig = {
	secret: 'thisshouldbeasecret!',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000 * 60 * 60,
		maxAge: 1000 * 60 * 60
	}
};

app.use(session(sessionConfig));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use((req, res, next) => {
    // res.locals.currentUser = req.user;
	console.log("hello");
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// app.use(function() {
// 	app.use(cookieParser('keyboard cat'));
// 	app.use(session({ cookie: { maxAge: 60000 }}));
// 	app.use(flash());
// });
// req.flash('error', 'You do not have permission to do that!');
// req.flash('success', 'Successfully made a new campground!');

app.use('/', userRoutes);
app.use('/', authentication);

app.get('/stories', (req, res) => {
	res.render('successStories');
});

app.get('*', (req, res) => {
	res.render('404error');
});

app.listen(process.env.PORT, () =>
	console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
);
