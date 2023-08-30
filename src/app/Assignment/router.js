const {
	addAssignment,
    updateAssignment,
    deleteAssignment,
    relateOneStudentWithAssignment,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addAssignment);

router.post('/students/add', relateOneStudentWithAssignment);

router.post('/update/:assignment_id', updateAssignment);

router.delete('/delete/:assignment_id', deleteAssignment);

module.exports = router;