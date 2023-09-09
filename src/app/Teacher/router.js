const {
    addTeacher,
    teacherLogin,
    updateTeacher,
    addSubjectToTeacher,
    unRelateTeacherWithOneSubject,
    relateAllGroupOfSubjectsToTeacher,
    deleteTeacher,
    addTeacherNote,
    deleteNote,
    updateTeacherNote,
    relateNoteWithStudent,
    unRelateNoteWithOneStudent,
    relateNoteWithAllStudentsGroup,
    getAllTeahcherNotesForOneStudent,
    getAllTeahcherNotesForOneGroup,
    getAllTeahcherNotesForOneClass,
    getOneTeacherWithAllInfo,
    getAllTeacherNoteForoneTeacher,
    getAllTeacher,
    addTeacherNoteWithStudents,
    relateNoteWithAllStudentsOfGroup,
    getAllTeacherSubject,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/login', teacherLogin);

router.get('/get/:teacher_id', getOneTeacherWithAllInfo);

router.get('/note/get/:teacher_id', getAllTeacherNoteForoneTeacher);

router.get('/notes/students/get-all/:student_id',getAllTeahcherNotesForOneStudent);

router.post('/notes/students/add-one/:id', relateNoteWithStudent);

router.post('/notes/add-with-students', addTeacherNoteWithStudents);

router.post('/notes/group/add/:group_id', relateNoteWithAllStudentsOfGroup);

router.delete('/delete/:id', deleteTeacher);

router.delete('/notes/delete/:id', deleteNote);

router.post('/notes/students/add-all/:id', relateNoteWithAllStudentsGroup);

router.post('/notes/add/:teacher_id', addTeacherNote);

router.get('/get-all',getAllTeacher);

router.get('/subject/get-all',getAllTeacherSubject);

router.post('/register', addTeacher);

router.post('/subjects/add-one', addSubjectToTeacher);

router.use(isAuth);

router.put('/update', updateTeacher);

router.put('/notes/update/:note_id', updateTeacherNote);

router.delete('/notes/students/delete-one/:id',unRelateNoteWithOneStudent);

router.get('/notes/groups/get-all/:group_id',getAllTeahcherNotesForOneGroup);

router.get('/notes/classes/get-all/:class_id',getAllTeahcherNotesForOneClass);

router.post('/subjects/add-all/:teacher_id', relateAllGroupOfSubjectsToTeacher);

router.delete('/subjects/delete-one/:subject_id', unRelateTeacherWithOneSubject);

module.exports = router;
