const { Group } = require('./service');


module.exports = {

    addGroup: async (req, res) => {
        const result = await new Group(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateGroup: async (req, res) => {
        const result = await new Group(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}