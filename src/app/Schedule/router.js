const {
	addSchedule,
    getAllScheduleForOneGroup,
    addTheWholeSchedule,
    deleteSchedule,
    getAllSchedule,
    getAllScheduleForOneTeacher,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addSchedule);

router.post('/delete/:schedule_id', deleteSchedule);

router.get('/get/:group_id', getAllScheduleForOneGroup);

router.get('/get/teacher/:teacher_id', getAllScheduleForOneTeacher);

router.get('/get-all', getAllSchedule);

router.post('/add-the-whole-program', addTheWholeSchedule);

module.exports = router;