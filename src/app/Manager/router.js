const {
	addManager,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', addManager);

router.use(isAuth)

module.exports = router;