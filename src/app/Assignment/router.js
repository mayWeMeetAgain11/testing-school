const {
	addAssignment,
    updateAssignment,
    deleteAssignment,
    relateOneStudentWithAssignment,
    unRelateOneStudentWithAssignment,
    getAllAssignmentsWithItsInfo,
    getAllFutureAssignmentsWithItsInfo,
    getAllPassedAssignmentsWithItsInfo,
    getAllFutureAssignmentsWithItsInfoForOneGroup,
    getAllPassedAssignmentsWithItsInfoForOneStudent,
    getAllPassedAssignmentsWithItsInfoForOneStudentAlLaythForHeadache,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addAssignment);

router.post('/students/add', relateOneStudentWithAssignment);

router.post('/update/:assignment_id', updateAssignment);

router.delete('/delete/:assignment_id', deleteAssignment);

router.get('/get-all', getAllAssignmentsWithItsInfo);

router.get('/not-done-yet/get-all/:group_id', getAllFutureAssignmentsWithItsInfoForOneGroup);

router.get('/not-done-yet/get-all', getAllFutureAssignmentsWithItsInfo);

router.get('/passed/get-all/:student_id', getAllPassedAssignmentsWithItsInfoForOneStudent);

router.get('/passed/get-all/allyth/:student_id', getAllPassedAssignmentsWithItsInfoForOneStudentAlLaythForHeadache);

router.get('/passed/get-all', getAllPassedAssignmentsWithItsInfo);

router.delete('/students/delete-one/:assignment_id', unRelateOneStudentWithAssignment);

module.exports = router;