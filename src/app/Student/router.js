const {
    addStudent,
    studentLogin,
    updateStudent,
    deleteStudent,
    linkStudentToNewGroup,
    getAllStudents,
    getAllStudentsForOneGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', isAuth, addStudent);

router.post('/login', studentLogin);

router.get('/get-all', getAllStudents);

router.get('/group/get-all/:group_id', getAllStudentsForOneGroup);

router.use(isAuth);

router.put('/update', updateStudent);

router.put('/update/link-group/:id', linkStudentToNewGroup);

router.delete('/delete/:id', deleteStudent);

module.exports = router;