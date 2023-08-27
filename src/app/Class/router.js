const {
	addClass,
	updateClass
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addClass);

router.put('/update', isAuth, updateClass);

module.exports = router;