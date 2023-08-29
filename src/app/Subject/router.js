const {
    addSubject,
    updateSubject,
    deleteSubject,
    getAllTeacherSubjectsForOneStudent,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addSubject);

router.put('/update/:id', isAuth, updateSubject);

router.delete('/delete/:id', isAuth, deleteSubject);

router.get('/get-all/student/:student_id', getAllTeacherSubjectsForOneStudent);

module.exports = router;