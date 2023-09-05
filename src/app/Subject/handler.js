const { Subject } = require('./service');
const { TeacherSubject } = require('../Teacher/services/TeacherSubjectService');


module.exports = {

    addSubject: async (req, res) => {
        const result = await new Subject(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    updateSubject: async (req, res) => {
        const result = await new Subject(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteSubject: async (req, res) => {
        const result = await Subject.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeacherSubjectsForOneStudent: async (req, res) => {
        const result = await TeacherSubject.getAllTeacherSubjectsForOneStudent(req.params.student_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeacherSubjectsForOnegroup: async (req, res) => {
        const result = await TeacherSubject.getAllTeacherSubjectsForOneGroup(req.params.group_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllSubject: async (req, res) => {
        const result = await Subject.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllSubjectsForOneTeacher: async (req, res) => {
        const result = await Subject.getAllForOneTeacher(req.params.teacher_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}