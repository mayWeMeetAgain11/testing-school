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
    addAssignmentPdf,
    deleteAssignmentPdf,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');
const  {upload} = require('../../../utils/multer/uplaodFiles');

router.post('/add', addAssignment);

router.post('/pdf/add', upload.single('pdf'), addAssignmentPdf);

router.delete('/pdf/delete/:assignment_pdf_id', deleteAssignmentPdf);

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
