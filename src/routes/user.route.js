const express = require('express');
const router = express.Router();
const passport = require('passport')
// const UserController = require('../controllers/user.controller');

router.post('/login', passport.authenticate('local', {
    succeesRedirect: '/',
    failureRedirect: '/login'
}));

// router.get('/', UserController.getUsers)

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;

