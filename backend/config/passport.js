const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const RedditStrategy = require('passport-reddit').Strategy;
const User = require('../models/User');
const { twitterApiKey, twitterApiSecret, redditClientId, redditClientSecret } = require('./apiKeys');

passport.use(new TwitterStrategy({
  consumerKey: twitterApiKey,
  consumerSecret: twitterApiSecret,
  callbackURL: '/auth/twitter/callback'
}, async (token, tokenSecret, profile, done) => {
  const user = await User.findOneAndUpdate(
    { twitterId: profile.id },
    { username: profile.username },
    { upsert: true, new: true }
  );
  done(null, user);
}));

passport.use(new RedditStrategy({
  clientID: redditClientId,
  clientSecret: redditClientSecret,
  callbackURL: '/auth/reddit/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOneAndUpdate(
    { redditId: profile.id },
    { username: profile.name },
    { upsert: true, new: true }
  );
  done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
