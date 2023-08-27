const {
    addStudent,
    studentLogin,
    updateStudent,
    deleteStudent,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', isAuth, addStudent);

router.post('/login', studentLogin);

router.use(isAuth);

router.put('/update', updateStudent);

router.delete('/delete/:id', deleteStudent);

module.exports = router;