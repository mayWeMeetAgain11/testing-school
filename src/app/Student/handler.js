const { Student } = require('./service');


module.exports = {

    addStudent: async (req, res) => {
        const result = await new Student(req.body).add();
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

    deleteStudent: async (req, res) => {
        console.log(req.user.id);
        const result = await Student.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllStudents: async (req, res) => {
        const result = await Student.getAll();
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