const db = require('../data/dbConfig');

exports.addBookmark = bookmark => {
  return db('bookmarks').insert(bookmark, 'id');
};

exports.getBookMarkById = userId => {
  return db('bookmarks as b')
    .join('posts as p', 'b.post_id', 'p.id')
    .select(
      'b.user_id',
      'p.id',
      'p.author',
      'p.score',
      'p.time',
      'p.title',
      'p.url'
    )
    .where('b.user_id', '=', userId);
};
