const {
    addSubject,
    updateSubject,
    deleteSubject,
    getAllTeacherSubjectsForOneStudent,
    getAllTeacherSubjectsForOnegroup,
    getAllSubjectsForOneTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addSubject);

router.put('/update/:id', isAuth, updateSubject);

router.delete('/delete/:id', isAuth, deleteSubject);

router.get('/get-all/student/:student_id', getAllTeacherSubjectsForOneStudent);

router.get('/get-all/teacher/:teacher_id', getAllSubjectsForOneTeacher);

router.get('/get-all/group/:group_id', getAllTeacherSubjectsForOnegroup);

module.exports = router;