const router = require('express').Router();
const {
  getUserBookmarks,
  postBookMark
} = require('../controllers/bookmarkController');
const validateToken = require('../middlewares/validateToken');
const verifyBookmarkBody = require('../middlewares/verifyBookmarkBody');

router
  .route('/bookmarks')
  .get(validateToken, getUserBookmarks)
  .post(verifyBookmarkBody, validateToken, postBookMark);

module.exports = router;
