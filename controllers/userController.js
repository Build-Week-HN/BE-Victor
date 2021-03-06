const bcrypt = require('bcryptjs');
const { getUser, postUser } = require('../models/userModel');
const { generateToken } = require('../utils/generateToken');

exports.register = async (req, res) => {
  let { username, password } = req.body;

  try {
    let exists = await getUser(username);
    if (exists) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = bcrypt.hashSync(password, 14);
    let newUser = {
      username,
      password: hashedPassword
    };

    let user = await postUser(newUser);
    const token = generateToken(user);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  let { username, password } = req.body;

  try {
    let user = await getUser(username);
    if (!user) return res.status(400).json({ error: "User doesn't exist" });

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      return res.status(200).json({ token });
    }
    return res.status(401).json({ message: 'Invalid Credentials' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
