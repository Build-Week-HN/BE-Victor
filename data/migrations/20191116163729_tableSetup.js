exports.up = function(knex) {
  return knex.schema
    .createTable('posts', posts => {
      posts.integer('id').unique();
      posts.integer('comment_count');
      posts.string('author', 255);
      posts.integer('score');
      posts.integer('time');
      posts.string('title', 255);
      posts.string('url', 255);
    })
    .createTable('comments', comments => {
      comments.integer('id').unique();
      comments.integer('post_id');
      comments.string('text', 5000);
      comments.string('author', 255);
      comments.integer('time');
    })
    .createTable('users', users => {
      users.increments();

      users.string('username', 255).unique();
      users.string('password', 255);
    })
    .createTable('bookmarks', bookmarks => {
      bookmarks.integer('user_id');

      bookmarks.integer('post_id');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('posts')
    .dropTableIfExists('users');
};