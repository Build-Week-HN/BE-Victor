const jwt = require('jsonwebtoken');

exports.generateToken = user => {
  console.log(user);
  const payload = {
    subject: user.id,
    name: user.username
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET);
};
