const router = require('express').Router();
const {
  getCommunityPosts,
  postCommunityPost
} = require('../controllers/communityPostController');
const verifyCommunityPostBody = require('../middlewares/verifyCommunityPostBody');

/**
 * @swagger
 * /community:
 *  post:
 *    summary: Adds a new community post
 *    description: Adds a new community post
 *    tags: [Community]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Details
 *        description: Details of post to add
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - author
 *            - text
 *          properties:
 *            title:
 *              type: string
 *            author:
 *              type: string
 *            text:
 *              type: string
 *    responses:
 *      201:
 *        description: returnsdetails of the post added
 *      401:
 *        description: returned if any of any fields are missing
 *      500:
 *        description: returned in the event of a server error
 */
router.post('/community', verifyCommunityPostBody, postCommunityPost);
/**
 *
 * @swagger
 * /community:
 *  get:
 *    summary: Gets all community posts available
 *    description: Gets all community posts available
 *    tags: [Community]
 *    responses:
 *      200:
 *        description: returns an array of objects
 *        schema:
 *          $ref: '#/definitions/Community'
 *      500:
 *        description: returned in the event of a server error
 */

router.get('/community', getCommunityPosts);

module.exports = router;
