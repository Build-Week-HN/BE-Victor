const router = require('express').Router();
const {
  getUserBookmarks,
  postBookMark
} = require('../controllers/bookmarkController');
const validateToken = require('../middlewares/validateToken');
const verifyBookmarkBody = require('../middlewares/verifyBookmarkBody');

/**
 * @swagger
 * /bookmarks:
 *  get:
 *    security:
 *      - JWTKeyHeader: []
 *    summary: Returns bookmarks belonging to the logged in user
 *    description: Returns bookmarks belonging to the logged in user
 *    tags: [Bookmarks]
 *    responses:
 *      200:
 *        description: returns an array of objects
 *        schema:
 *          $ref: '#/definitions/Post'
 *      401:
 *        description: returned when JWT is either missing or invalid
 *      500:
 *        description: returned in the event of a server error
 */
router.get('/bookmarks', validateToken, getUserBookmarks);

/**
 * @swagger
 * /bookmarks:
 *  post:
 *    security:
 *      - JWTKeyHeader: []
 *    summary: Adds a new bookmark for the logged in user
 *    description: Adds a new bookmark for the logged in user
 *    tags: [Bookmarks]
 *    parameters:
 *      - in: body
 *        name: post information
 *        description: Information about post to add to bookmarks
 *        schema:
 *          type: object
 *          required:
 *            - postId
 *          properties:
 *            postId:
 *              type: integer
 *    responses:
 *      201:
 *        description: returns the newly-created bookmark
 *      401:
 *        description: returned when JWT is missing or invalid
 *      500:
 *        description: returned in the event of a server error
 */
router.post('/bookmarks', verifyBookmarkBody, validateToken, postBookMark);
module.exports = router;
