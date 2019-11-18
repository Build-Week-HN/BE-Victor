const jwt = require('jsonwebtoken');

exports.generateToken = user => {
  const payload = {
    subject: user.id,
    name: user.name
  };

  return jwt.sign(payload, process.env.TOKEN_SECRET);
};
