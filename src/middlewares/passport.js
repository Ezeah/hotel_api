const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/user.model");

passport.use(new LocalStrategy({
    usernameField: "email"
}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());