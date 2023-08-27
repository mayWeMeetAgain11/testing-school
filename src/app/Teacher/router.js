const {
    addTeacher,
    teacherLogin,
    updateTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/login', teacherLogin);

router.use(isAuth);

router.post('/register', addTeacher);

router.put('/update', updateTeacher);

module.exports = router;