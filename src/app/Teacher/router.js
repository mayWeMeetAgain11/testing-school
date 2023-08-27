const {
    addTeacher,
    teacherLogin,
    updateTeacher,
    addSubjectToTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/login', teacherLogin);

router.use(isAuth);

router.post('/register', addTeacher);

router.post('/subjects/add-one', isAuth, addSubjectToTeacher);

router.put('/update', updateTeacher);

module.exports = router;