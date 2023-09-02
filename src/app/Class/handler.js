const { Class } = require('./service');


module.exports = {

    addClass: async (req, res) => {
        const result = await new Class(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateClass: async (req, res) => {
        const result = await new Class(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteClass: async (req, res) => {
        const result = await Class.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllClasses: async (req, res) => {
        const result = await Class.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllClassesWithInfoForOneStudent: async (req, res) => {
        const result = await Class.getAllWithInfoForOneStudent(req.params.teacher_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}