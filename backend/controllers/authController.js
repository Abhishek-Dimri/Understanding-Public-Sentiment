const User = require('../models/User');

const handleAuth = async (req, res) => {
  try {
    const user = await User.findOne({ twitterId: req.user.id });
    if (!user) {
      const newUser = new User({ username: req.user.username, twitterId: req.user.id });
      await newUser.save();
    }
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { handleAuth };
