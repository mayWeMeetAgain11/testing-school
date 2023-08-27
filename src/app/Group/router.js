const {
	addGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addGroup);

module.exports = router;