const { Assignment, } = require('./services/AssignmentService');
const { AssignmentStudent, } = require('./services/AssignmentStudentService');
const { AssignmentPdf, } = require('./services/AssignmentPdfService');


module.exports = {

    addAssignment: async (req, res) => {
        const result = await new Assignment(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    addAssignmentPdf: async (req, res) => {
        const data = req.body;
        data.url = req.file;
        const result = await new AssignmentPdf(data).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteAssignmentPdf: async (req, res) => {
        const result = await AssignmentPdf.delete(req.params.assignment_pdf_id);
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

    getAllFutureAssignmentsWithItsInfoForOneGroup: async (req, res) => {
        const result = await Assignment.getAllForFutureForOneGroup(req.params.group_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllFutureAssignmentsWithItsInfo: async (req, res) => {
        const result = await Assignment.getAllForFuture();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllPassedAssignmentsWithItsInfo: async (req, res) => {
        const result = await Assignment.getAllPassed();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllPassedAssignmentsWithItsInfoForOneStudent: async (req, res) => {
        const result = await Assignment.getAllPassedWithItsInfoForOneStudent(req.params.student_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllPassedAssignmentsWithItsInfoForOneStudentAlLaythForHeadache: async (req, res) => {
        const result = await Assignment.getAllPassedWithItsInfoForOneStudent(req.params.student_id);
        let finalResult = [];
        let assignment = {};
        for (let i = 0; i < result.data.length; i++) {
            assignment.mark = result.data[i].assignment_students[0].mark;
            assignment.total_mark = result.data[i].total_mark;
            assignment.date = result.data[i].date;
            assignment.subject = result.data[i].group_teacher_subject.teacher_subject.subject.name;
            finalResult.push(assignment);
            assignment = {};
        }
        res.status(result.status).send({
            data: finalResult,
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
