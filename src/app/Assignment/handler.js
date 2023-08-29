const { Assignment } = require('./services/AssignmentService');


module.exports = {

    addAssignment: async (req, res) => {
        const result = await new Assignment(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateAssignment: async (req, res) => {
        let data = req.body;
        data.assignment_id = req.params.assignment_id;
        const result = await Assignment.update(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteAssignment: async (req, res) => {
        const assignment_id = req.params.assignment_id;
        const result = await Assignment.delete(assignment_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}