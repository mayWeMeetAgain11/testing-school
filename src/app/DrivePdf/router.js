const {
    addDrivePdf,
    getDrivePdf,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addDrivePdf);

router.get('/get', getDrivePdf);

module.exports = router;