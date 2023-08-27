const {
    addSubject,
    updateSubject,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', isAuth, addSubject);

router.put('/update/:id', isAuth, updateSubject);

module.exports = router;