const comment = require('../commentModel');
const db = require('../../data/dbConfig');

beforeEach(async () => {
  await db('comments').truncate();
});

describe('Comment model', () => {
  describe('insert function', () => {
    let comments;
    test('should insert a new comment', async () => {
      await comment.addComment({
        post_id: 3242,
        text: 'Text',
        author: 'Author',
        time: 214413241
      });

      comments = await db('comments');
      expect(comments).toHaveLength(1);
    });
  });
});
