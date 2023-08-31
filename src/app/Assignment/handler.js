const { Assignment, } = require('./services/AssignmentService');
const { AssignmentStudent, } = require('./services/AssignmentStudentService');


module.exports = {

    addAssignment: async (req, res) => {
        const result = await new Assignment(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllAssignmentsWithItsInfo: async (req, res) => {
        const result = await Assignment.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateOneStudentWithAssignment: async (req, res) => {
        const result = await new AssignmentStudent(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateOneStudentWithAssignment: async (req, res) => {
        let data = req.body;
        data.student_id = req.params.student_id;
        const result = await new AssignmentStudent.delete(data);
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