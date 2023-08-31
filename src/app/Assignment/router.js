const {
	addAssignment,
    updateAssignment,
    deleteAssignment,
    relateOneStudentWithAssignment,
    unRelateOneStudentWithAssignment,
    getAllAssignmentsWithItsInfo,
    getAllFutureAssignmentsWithItsInfo,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addAssignment);

router.post('/students/add', relateOneStudentWithAssignment);

router.post('/update/:assignment_id', updateAssignment);

router.delete('/delete/:assignment_id', deleteAssignment);

router.get('/get-all', getAllAssignmentsWithItsInfo);

router.get('/not-done-yet/get-all', getAllFutureAssignmentsWithItsInfo);

router.delete('/students/delete-one/:assignment_id', unRelateOneStudentWithAssignment);

module.exports = router;