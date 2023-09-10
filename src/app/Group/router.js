const {
	addGroup, 
    updateGroup,
    addTeacherSubjectToGroup,
    unRelateGroupWithOneTeacherSubject,
    relateAllGroupOfTeacherSubjectsToGroup,
    deleteGroup,
    getAllGroupsWithInfo,
    getAllGroupsForOneClass,
    getAllGroupTeacherSubject,
    getAllGroupTeacherSubjectForOneGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addGroup);

router.put('/update/:id', updateGroup);

router.delete('/delete/:id', deleteGroup);

router.get('/get-all', getAllGroupsWithInfo);

router.get('/teacher-subject/get-all', getAllGroupTeacherSubject);

router.get('/teacher-subject/get-all/:group_id', getAllGroupTeacherSubjectForOneGroup);

router.get('/get-all/:id', getAllGroupsForOneClass);

router.post('/teacher-subject/add-one', addTeacherSubjectToGroup);

router.delete('/teacher-subject/delete-one/:teacher_subject_id', unRelateGroupWithOneTeacherSubject);

router.post('/teacher-subject/add-all/:group_id', relateAllGroupOfTeacherSubjectsToGroup);

module.exports = router;
