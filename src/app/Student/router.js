const {
    addStudent,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', isAuth, addStudent);

module.exports = router;