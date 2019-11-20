const bookmark = require('../bookmarkModel');
const db = require('../../data/dbConfig');

beforeEach(async () => {
  await db('bookmarks').truncate();
});

describe('Bookmark model', () => {
  describe('insert function', () => {
    let bookmarks;
    test('should insert a new bookmark', async () => {
      await bookmark.addBookmark({
        post_id: 3243523,
        user_id: 34
      });

      bookmarks = await db('bookmarks');
      expect(bookmarks).toHaveLength(1);
    });
  });
});
