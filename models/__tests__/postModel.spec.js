const post = require('../postModel');
const db = require('../../data/dbConfig');

beforeEach(async () => {
  await db('posts').truncate();
});

describe('post model', () => {
  describe('insert function', () => {
    let posts;
    test('should insert a new post', async () => {
      await post.addPost({
        comment_count: 3242,
        score: 434,
        author: 'Author',
        time: 214413241,
        title: 'title',
        url: 'url'
      });

      posts = await db('posts');
      expect(posts).toHaveLength(1);
    });
  });
});
