module.exports = (req, res, next) => {
  const { postId } = req.body;
  if (!postId) return res.status(401).json({ error: 'No Post Id' });
  next();
};
