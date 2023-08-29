const {
	addClass,
	updateClass,
	deleteClass,
	getAllClasses,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/add', addClass);
// router.post('/add', isAuth, addClass);

router.get('/get-all', getAllClasses);
// router.post('/add', isAuth, addClass);

// router.delete('/delete/:id', isAuth, deleteClass);
router.delete('/delete/:id', deleteClass);

// router.put('/update/:id', isAuth, updateClass);
router.put('/update/:id', updateClass);

module.exports = router;