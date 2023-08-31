const { Student } = require('./services/StudentService');
const { Feedback } = require('./services/FeedbackService');


module.exports = {

    addStudent: async (req, res) => {
        const result = await new Student(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    addFeedback: async (req, res) => {
        const result = await new Feedback(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    studentLogin: async (req, res) => {
        const {email, password} = req.body;
        const result = await Student.login(email, password);
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    updateStudent: async (req, res) => {
        const result = await new Student(req.body).update(req.user.id);
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    updateFeedback: async (req, res) => {
        const result = await new Feedback(req.body).update(req.params.feedback_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteStudent: async (req, res) => {
        // console.log(req.user.id);
        const result = await Student.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteFeedback: async (req, res) => {
        const result = await Feedback.delete(req.params.feedback_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllStudentsWithGroups: async (req, res) => {
        const result = await Student.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllStudentsForOneGroup: async (req, res) => {
        const result = await Student.getAllForOneGroup(req.params.group_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllNotesForManyStudents: async (req, res) => {
        const result = await Student.getAllNotesForManyStudent(req.body.student_ids);
        res.status(result.status).send({
            data: result.data,
        });
    },

    linkStudentToNewGroup: async (req, res) => {
        const data = req.body;
        const result = await Student.linkToGroup(req.params.id, data);
        res.status(result.status).send({
            data: result.data,
        });
    },

}