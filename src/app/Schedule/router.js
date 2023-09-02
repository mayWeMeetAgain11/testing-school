const {
	addSchedule,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSchedule);

module.exports = router;