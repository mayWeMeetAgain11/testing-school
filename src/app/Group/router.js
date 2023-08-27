const {
	addGroup, 
    updateGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addGroup);

router.put('/update/:id', isAuth, updateGroup);

module.exports = router;