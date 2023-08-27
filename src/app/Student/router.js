const {
    addStudent,
    studentLogin,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', isAuth, addStudent);

router.post('/login', studentLogin);

module.exports = router;