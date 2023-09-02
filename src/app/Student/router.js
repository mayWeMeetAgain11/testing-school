const {
    addStudent,
    studentLogin,
    updateStudent,
    deleteStudent,
    linkStudentToNewGroup,
    getAllStudentsWithGroups,
    getAllStudentsForOneGroup,
    getAllNotesForManyStudents,
    addFeedback,
    updateFeedback,
    deleteFeedback,
    getAllFeedbacksWithStudent,
    getOneStudentWithAllHisInfo,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', isAuth, addStudent);

router.post('/feedbacks/add', addFeedback);

router.post('/login', studentLogin);

router.put('/feedbacks/update/:feedback_id', updateFeedback);

router.get('/feedbacks/get-all', getAllFeedbacksWithStudent);

router.get('/get-all', getAllStudentsWithGroups);

router.get('/get/:student_id', getOneStudentWithAllHisInfo);

router.get('/group/get-all/:group_id', getAllStudentsForOneGroup);

router.get('/notes/get-all', getAllNotesForManyStudents);

router.delete('/feedbacks/delete/:feedback_id', deleteFeedback);

router.use(isAuth);

router.put('/update', updateStudent);

router.put('/update/link-group/:id', linkStudentToNewGroup);

router.delete('/delete/:id', deleteStudent);

module.exports = router;