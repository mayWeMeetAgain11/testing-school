const {
	addManager,
    managerLogin,
    updateManager,
    addManagerNote,
    updateManagerNote,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', addManager);

router.post('/note/add', addManagerNote);

router.post('/login', managerLogin);

router.put('/note/update/:manager_note_id', updateManagerNote);

router.use(isAuth);

router.put('/update', updateManager);

module.exports = router;