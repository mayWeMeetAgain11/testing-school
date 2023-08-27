const {
    addTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');



router.use(isAuth);

router.post('/register', addTeacher);

module.exports = router;