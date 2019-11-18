const { addPost } = require('../models/postModel');
const { getCommentById } = require('../models/commentModel');

const db = require('../data/dbConfig');
exports.getPosts = async (req, res) => {
  try {
    let posts = await db('posts');
    await Promise.all(
      posts.map(async post => {
        let comments = await getCommentById(post.id);
        // eslint-disable-next-line require-atomic-updates
        post.comments = comments;
      })
    );
    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

exports.newPost = async (req, res) => {
  const { post_id, comment_count, author, score, time, title, url } = req.body;

  try {
    let post = await addPost({
      post_id,
      comment_count,
      author,
      score,
      time,
      title,
      url
    });
    return res.status(201).json(post);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
