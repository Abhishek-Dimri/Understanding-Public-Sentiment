const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/twitter', passport.authenticate('twitter'));
router.get('/reddit', passport.authenticate('reddit'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

router.get(
  '/reddit/callback',
  passport.authenticate('reddit', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

module.exports = router;
