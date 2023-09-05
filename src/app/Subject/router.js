const {
    addSubject,
    updateSubject,
    deleteSubject,
    getAllTeacherSubjectsForOneStudent,
    getAllTeacherSubjectsForOnegroup,
    getAllSubjectsForOneTeacher,
    getAllSubject,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSubject);

router.put('/update/:id', updateSubject);

router.delete('/delete/:id', deleteSubject);

router.get('/get-all/student/:student_id', getAllTeacherSubjectsForOneStudent);

router.get('/get-all/teacher/:teacher_id', getAllSubjectsForOneTeacher);

router.get('/get-all/group/:group_id', getAllTeacherSubjectsForOnegroup);

router.get('/get-all', getAllSubject);

module.exports = router;