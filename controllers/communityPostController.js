const { addPost, getAllPosts } = require('../models/communityPostModel');

exports.postCommunityPost = async (req, res) => {
  const {
    body: { title, author, text }
  } = req;

  try {
    let community = await addPost({
      title,
      author,
      text,
      date: new Date().toDateString()
    });

    return res.status(201).json(community);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wromg: ' + error.message });
  }
};

exports.getCommunityPosts = async (req, res) => {
  try {
    let posts = await getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wromg: ' + error.message });
  }
};
