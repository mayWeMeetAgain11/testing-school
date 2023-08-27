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

}