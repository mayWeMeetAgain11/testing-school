const {
	addSession,
    relateSessionWithStudent,
    unRelateSessionWithStudent,
    deleteSession,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSession);

router.delete('/delete/:session_id', deleteSession);

router.post('/existing-student/add/:session_id', relateSessionWithStudent);

router.delete('/existing-student/delete/:existing_student_id', unRelateSessionWithStudent);

module.exports = router;