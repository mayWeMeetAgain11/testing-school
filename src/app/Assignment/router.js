const {
	addAssignment,
    updateAssignment,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addAssignment);

router.post('/update/:assignment_id', updateAssignment);

module.exports = router;