exports.up = function(knex) {
  return knex.schema
    .createTable('posts', posts => {
      posts.integer('id');
      posts.integer('comment_count');
      posts.string('author', 255);
      posts.integer('score');
      posts.integer('time');
      posts.string('title', 255);
      posts.string('url', 255);
    })
    .createTable('comments', comments => {
      comments.integer('id');
      comments
        .integer('post_id')
        .references('id')
        .inTable('posts');
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
      bookmarks
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');

      bookmarks
        .integer('post_id')
        .notNullable()
        .references('id')
        .inTable('posts');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('posts')
    .dropTableIfExists('users');
};
