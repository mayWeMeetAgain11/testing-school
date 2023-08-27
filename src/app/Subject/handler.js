const { Subject } = require('./service');


module.exports = {

    addSubject: async (req, res) => {
        const result = await new Subject(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    updateSubject: async (req, res) => {
        const result = await new Subject(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteSubject: async (req, res) => {
        const result = await Subject.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}