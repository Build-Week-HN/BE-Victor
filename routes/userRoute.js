const router = require('express').Router();
const { login, register } = require('../controllers/userController');
const veriyAuthBody = require('../middlewares/veriyAuthBody');

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login  an existing user
 *    description: Login  an existing user
 *    tags: [Auth]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: credentials
 *        description: Credentials matching an existing user in the database
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: returns the JSON Web Token (JWT) needed to make requests
 *                     against all other routes
 *      401:
 *        description: returned if any of `username` or `password` are missing
 *      500:
 *        description: returned in the event of a server error
 */
router.post('/login', veriyAuthBody, login);
/**
 *
 * @swagger
 * /register:
 *  post:
 *    summary: Create a new user
 *    description: Create a new user
 *    tags: [Auth]
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The user to create
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      201:
 *        description: Logs in the user, and returns a token for further requests
 *      401:
 *        description: returned if `name` or `password` are
 *                     missing
 *      500:
 *        description: returned in the event of a server error
 */

router.post('/register', veriyAuthBody, register);

module.exports = router;
