module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(401).json({ error: 'No username or password' });
  next();
};
