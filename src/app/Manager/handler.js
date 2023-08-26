const { Manager } = require('./service');


module.exports = {

    addManager: async (req, res) => {
        const result = await new Manager(req.body).add();
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

}