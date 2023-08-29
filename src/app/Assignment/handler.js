const { Assignment } = require('./services/AssignmentService');


module.exports = {

    addAssignment: async (req, res) => {
        const result = await new Assignment(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}