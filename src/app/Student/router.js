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
    getAllFeedbackForOneStudent,
    getAllStudentsWithGroupsForOneTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', addStudent);

router.post('/feedbacks/add', addFeedback);

router.post('/login', studentLogin);

router.put('/feedbacks/update/:feedback_id', updateFeedback);

router.get('/feedbacks/get-all', getAllFeedbacksWithStudent);

router.get('/feedbacks/get-all/:student_id', getAllFeedbackForOneStudent);

router.get('/get-all', getAllStudentsWithGroups);

router.get('/get-all/teacher/:teacher_id', getAllStudentsWithGroupsForOneTeacher);

router.get('/get/:student_id', getOneStudentWithAllHisInfo);

router.get('/group/get-all/:group_id', getAllStudentsForOneGroup);

router.get('/notes/get-all', getAllNotesForManyStudents);

router.delete('/feedbacks/delete/:feedback_id', deleteFeedback);

router.use(isAuth);

router.put('/update', updateStudent);

router.put('/update/link-group/:id', linkStudentToNewGroup);

router.delete('/delete/:id', deleteStudent);

module.exports = router;