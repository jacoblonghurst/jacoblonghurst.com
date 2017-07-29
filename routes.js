let Login = require('./routes/login/login');
let Signup = require('./routes/login/signup');

module.exports = function(app, passport) {

    app.all('/secret/hidden', isLoggedIn, function(req, res) {
        res.sendFile('index.html', { root: __dirname + "/public/views/login" })
    });

    app.use('/secret/login', Login);
    app.use('/secret/signup', Signup);



};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.session.username)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}