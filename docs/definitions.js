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
 *         description: ID of post
 *      comment_count:
 *         type: integer
 *         description: Number of comments the post has
 *      author:
 *         type: string
 *         description: Autor of the post
 *      score:
 *         type: integer
 *         description: Number of upvotes the post has
 *      time:
 *         type: integer
 *         description: The time the comment was posted
 *      title:
 *         type: string
 *         description: The title of the post
 *      url:
 *         type: string
 *         description: The external URL the post links to
 *      comments:
 *         type: array
 *         description: Array of comments on the post
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
 *         description: Time the comment was posted.
 *
 * Community:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        description: The post ID.
 *      author:
 *        type: integer
 *        description: The author of the post.
 *      text:
 *        type: string
 *        description: The body of the post.
 *      title:
 *        type: string
 *        description: The title of the post.
 *      date:
 *        type: string
 *        description: Date the comment was posted.
 *      like_count:
 *        type: integer
 *        description: Number of likes.
 *      love_count:
 *        type: integer
 *        description: Number of loves.
 *      hate_count:
 *        type: integer
 *        description: Number of hates.
 */
