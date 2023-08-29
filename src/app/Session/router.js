const {
	addSession,
    relateSessionWithStudent,
    unRelateSessionWithStudent,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSession);

router.post('/existing-student/add/:session_id', relateSessionWithStudent);

router.delete('/existing-student/delete/:existing_student_id', unRelateSessionWithStudent);

module.exports = router;