const { Subject } = require('./service');


module.exports = {

    addSubject: async (req, res) => {
        const result = await new Subject(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}