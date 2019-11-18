const db = require('../data/dbConfig');

exports.addPost = post => {
  return db('posts').insert(post);
};

exports.getAllPosts = () => {
  return db('posts');
};

exports.getOne = id => {
  return db('posts')
    .where('post_id', '=', id)
    .first();
};
