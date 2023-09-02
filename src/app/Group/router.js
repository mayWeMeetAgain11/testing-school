const {
	addGroup, 
    updateGroup,
    addTeacherSubjectToGroup,
    unRelateGroupWithOneTeacherSubject,
    relateAllGroupOfTeacherSubjectsToGroup,
    deleteGroup,
    getAllGroupsWithInfo,
    getAllGroupsForOneClass,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addGroup);

router.put('/update/:id', updateGroup);

router.delete('/delete/:id', deleteGroup);

router.get('/get-all', getAllGroupsWithInfo);

router.get('/get-all/:id', getAllGroupsForOneClass);

router.post('/teacher-subject/add-one', isAuth, addTeacherSubjectToGroup);

router.delete('/teacher-subject/delete-one/:teacher_subject_id', unRelateGroupWithOneTeacherSubject);

router.post('/teacher-subject/add-all/:group_id', relateAllGroupOfTeacherSubjectsToGroup);

module.exports = router;