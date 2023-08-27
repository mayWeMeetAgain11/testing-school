const { Class } = require('./service');


module.exports = {

    addClass: async (req, res) => {
        const result = await new Class(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateClass: async (req, res) => {
        const result = await new Class(req.body).update(req.user.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}