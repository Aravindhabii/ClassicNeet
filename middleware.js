module.exports.isloggedin = (req, res, next) => {
	const sess = req.session.loginuser;
	const yep = 'Yes';
	if (sess !== yep) {
		res.redirect('/login');
	} else {
		next();
	}
};


module.exports.flash = (req,res,next)=>{
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	next()
}