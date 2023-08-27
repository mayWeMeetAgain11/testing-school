const {
    addTeacher,
    teacherLogin,
    updateTeacher,
    addSubjectToTeacher,
    unRelateTeacherWithOneSubject,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/login', teacherLogin);

router.use(isAuth);

router.post('/register', addTeacher);

router.put('/update', updateTeacher);

router.post('/subjects/add-one', addSubjectToTeacher);

router.delete('/subjects/delete-one/:subject_id', unRelateTeacherWithOneSubject);

module.exports = router;