const {
	addSession,
    relateSessionWithStudent,
    unRelateSessionWithStudent,
    deleteSession,
    updateSession,
    relateSessionWithAllStudents,
    getAllSessionsWithInfo,
    getAllSessionsWithInfoInDateRange,
    getAllSessionsWithInfoForOneStudent,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSession);

router.get('/get-all', getAllSessionsWithInfo);

router.get('/get-all/:student_id', getAllSessionsWithInfoForOneStudent);

router.get('/get-all-in-date-range', getAllSessionsWithInfoInDateRange);

router.delete('/delete/:session_id', deleteSession);

router.put('/update/:session_id', updateSession);

router.post('/existing-student/add/:session_id', relateSessionWithStudent);

router.post('/existing-student/add-all/:session_id', relateSessionWithAllStudents);

router.delete('/existing-student/delete/:existing_student_id', unRelateSessionWithStudent);

module.exports = router;