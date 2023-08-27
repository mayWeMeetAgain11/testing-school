const {
	addClass,
	updateClass
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addClass);

router.put('/update/:id', isAuth, updateClass);

module.exports = router;