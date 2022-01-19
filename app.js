const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
var cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const authentication = require('./routes/authentication');
const db = require('./database');
const methodOverride = require('method-override');
const compression = require('compression');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

db.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Mysql connected');
	}
});

const app = express();
app.use(express.json());
app.use(compression());

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

app.use('/', userRoutes);
app.use('/', authentication);

app.get('*', (req, res) => {
	res.render('404error');
});

app.listen(process.env.PORT, () =>
	console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
);


module.exports = {
	apps: [
		{
			script: 'app.js',
			watch: ['server', 'client'],
			watch_delay: 1000,
			ignore_watch: ['node_modules', 'client/img']
		}
	]
};
