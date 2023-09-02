const {
	addManager,
    managerLogin,
    updateManager,
    addManagerNote,
    updateManagerNote,
    relateManagerNoteWithManyGroups,
    relateManagerNoteToOneGroup,
} = require('./handler');
const router = require('express').Router();
const isAuth = require('../../../utils/auth/jwtMiddleware');

router.post('/register', addManager);

router.post('/note/add', addManagerNote);

router.post('/note/relate-with-one-group', relateManagerNoteToOneGroup);

router.post('/note/relate-with-all-groups/:manager_note_id', relateManagerNoteWithManyGroups);

router.post('/login', managerLogin);

router.put('/note/update/:manager_note_id', updateManagerNote);

router.use(isAuth);

router.put('/update', updateManager);

module.exports = router;