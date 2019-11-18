const router = require('express').Router();
const { getPosts } = require('../controllers/postController');

router.route('/posts').get(getPosts);

module.exports = router;
