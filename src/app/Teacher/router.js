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
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/login', teacherLogin);

router.use(isAuth);

router.post('/register', addTeacher);

router.put('/update', updateTeacher);

router.put('/notes/update/:note_id', updateTeacherNote);

router.delete('/delete/:id', deleteTeacher);

router.delete('/notes/delete/:id', deleteNote);

router.post('/notes/students/add-one/:id', relateNoteWithStudent);

router.post('/notes/students/add-all/:id', relateNoteWithAllStudentsGroup);

router.delete('/notes/students/delete-one/:id',unRelateNoteWithOneStudent);

router.get('/notes/students/get-all/:student_id',getAllTeahcherNotesForOneStudent);

router.post('/subjects/add-one', addSubjectToTeacher);

router.post('/notes/add', addTeacherNote);

router.post('/subjects/add-all/:teacher_id', relateAllGroupOfSubjectsToTeacher);

router.delete('/subjects/delete-one/:subject_id', unRelateTeacherWithOneSubject);

module.exports = router;