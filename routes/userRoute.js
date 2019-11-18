const router = require('express').Router();
const { login, register } = require('../controllers/userController');
const veriyAuthBody = require('../middlewares/veriyAuthBody');

router.post('/login', veriyAuthBody, login);
router.post('/register', veriyAuthBody, register);

module.exports = router;
