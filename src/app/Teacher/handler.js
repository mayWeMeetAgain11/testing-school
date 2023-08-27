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
        const teacher_id = req.user.id;
        let data = req.body;
        data.teacher_id = teacher_id;
        const result = await new TeacherSubject(data).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}