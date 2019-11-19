const router = require('express').Router();
const { getPosts } = require('../controllers/postController');

/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - Posts
 *     description: Returns top 20 posts on hackernews
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#/definitions/Post'
 */
router.route('/posts').get(getPosts);

module.exports = router;
