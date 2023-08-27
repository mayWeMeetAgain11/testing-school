const { Teacher,  } = require('./services/TeacherService');
const { TeacherSubject,  } = require('./services/TeacherSubjectService');


module.exports = {

    addTeacher: async (req, res) => {
        const result = await new Teacher(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },
        
    teacherLogin: async (req, res) => {
        const {email, password} = req.body;
        const result = await Teacher.login(email, password);
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    updateTeacher: async (req, res) => {
        const result = await new Teacher(req.body).update(req.user.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    addSubjectToTeacher: async (req, res) => {
        let data = req.body;
        const result = await new TeacherSubject(data).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateTeacherWithOneSubject: async (req, res) => {
        const {subject_id} = req.params;
        let data = req.body;
        data.subject_id = subject_id;
        const result = await TeacherSubject.delete(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

}