const db = require('../data/dbConfig');

exports.addPost = async post => {
  const [id] = await db('community_posts').insert(post, 'id');
  return getOne(id);
};

exports.getAllPosts = () => {
  return db('community_posts');
};

const getOne = id => {
  return db('community_posts')
    .where('id', '=', id)
    .first();
};
