const db = require('../data/dbConfig');

exports.addComment = comment => {
  return db('comments').insert(comment);
};

exports.getCommentById = postId => {
  return db('comments').where('post_id', '=', postId);
};
