const {
	addManager,
    managerLogin,
    updateManager
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', addManager);

router.post('/login', managerLogin);

router.use(isAuth);

router.put('/update', updateManager);

module.exports = router;