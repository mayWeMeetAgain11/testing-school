const { Manager } = require('./services/ManagerService');
const { ManagerNote } = require('./services/ManagerNoteService');


module.exports = {

    addManager: async (req, res) => {
        const result = await new Manager(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    addManagerNote: async (req, res) => {
        const result = await new ManagerNote(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    managerLogin: async (req, res) => {
        const {email, password} = req.body;
        const result = await Manager.login(email, password);
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateManager: async (req, res) => {
        const result = await new Manager(req.body).update(req.user.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateManagerNote: async (req, res) => {
        const {manager_note_id} = req.params;
        const result = await new ManagerNote(req.body).update(manager_note_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}