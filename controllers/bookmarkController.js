const { addBookmark, getBookMarkById } = require('../models/bookmarkModel');
const { getCommentById } = require('../models/commentModel');

exports.postBookMark = async (req, res) => {
  const {
    body: { postId },
    userId
  } = req;

  try {
    let bookmark = await addBookmark({ user_id: userId, post_id: postId });

    return res.status(201).json(bookmark);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wromg: ' + error.message });
  }
};

exports.getUserBookmarks = async (req, res) => {
  let { userId } = req;

  try {
    let bookmarks = await getBookMarkById(userId);
    await Promise.all(
      bookmarks.map(async bookmark => {
        let comments = await getCommentById(bookmark.id);
        // eslint-disable-next-line require-atomic-updates
        bookmark.comments = comments;
      })
    );
    return res.status(200).json(bookmarks);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wromg: ' + error.message });
  }
};
