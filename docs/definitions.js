/**
 * References:
 *  - https://swagger.io/docs/specification/2-0/describing-responses/
 *  - https://swagger.io/docs/specification/using-ref/
 *
 * @swagger
 * definitions:
 *  Post:
 *    type: object
 *    properties:
 *      id:
 *         type: integer
 *      comment_count:
 *         type: integer
 *      author:
 *         type: string
 *      score:
 *         type: integer
 *      time:
 *         type: integer
 *      title:
 *         type: string
 *      url:
 *         type: string
 *      comments:
 *         type: array
 *         items:
 *             $ref: '#/definitions/Comment'
 *
 *  Comment:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        description: The comment ID.
 *      post_id:
 *        type: integer
 *        description: The ID of the parent post.
 *      text:
 *        type: string
 *        description: The body of the comment.
 *      author:
 *        type: string
 *        description: The author of the comment.
 *      time:
 *         type: integer
 *         description: Time the comment was posted
 *
 */
