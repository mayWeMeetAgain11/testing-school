const { Student } = require('./service');


module.exports = {

    addStudent: async (req, res) => {
        const result = await new Student(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}