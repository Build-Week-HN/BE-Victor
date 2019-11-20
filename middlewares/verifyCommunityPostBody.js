module.exports = (req, res, next) => {
  const { title, author, text } = req.body;
  if (!title || !author || !text)
    return res
      .status(401)
      .json({ error: 'Title or author or post text missing' });
  next();
};
