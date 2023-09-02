const {
	addSchedule,
    getAllScheduleForOneGroup,
    addTheWholeSchedule,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSchedule);

router.get('/get/:group_id', getAllScheduleForOneGroup);

router.post('/add-the-whole-program', addTheWholeSchedule);

module.exports = router;