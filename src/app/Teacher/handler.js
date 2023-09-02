const { Teacher,  } = require('./services/TeacherService');
const { TeacherSubject,  } = require('./services/TeacherSubjectService');
const { TeacherNote,  } = require('./services/TeacherNoteService');
const { TeacherNoteStudent,  } = require('./services/TeacherNoteStudentService');
const { Factory,  } = require('./services/helper/factory');
const httpStatus = require('../../../utils/httpStatus');
const {database} = require('../index');


module.exports = {

    addTeacher: async (req, res) => {
        const result = await new Teacher(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getOneTeacherWithAllInfo: async (req, res) => {
        const result = await Teacher.getAllWithInfo(req.params.teacher_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeacherNoteForoneTeacher: async (req, res) => {
        const result = await TeacherNote.getAllForOneTeacher(req.params.teacher_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    addTeacherNote: async (req, res) => {
        let data = req.body;
        data.teacher_id = req.user.id;
        const result = await new TeacherNote(data).add();
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
    
    updateTeacherNote: async (req, res) => {
        let { note_id } = req.params;
        let data = req.body;
        data.teacher_id = req.user.id;
        const result = await new TeacherNote(data).update(note_id);
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    deleteTeacher: async (req, res) => {
        const result = await Teacher.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },
    
    deleteNote: async (req, res) => {
        const result = await TeacherNote.delete(req.params.id);
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

    relateAllGroupOfSubjectsToTeacher: async (req, res) => {
        try {
            const {teacher_id} = req.params;
            let {subject_ids} = req.body;
            const result = await database.transaction(async (transaction) => {
                console.log("1");
                const deletedSubjects = await TeacherSubject.deleteAllForOneTeacher(teacher_id, { transaction });
                console.log("2");
                const factoriedData = Factory.relateAllObjectsWithOneProperty(subject_ids, teacher_id);
                console.log("3");
                console.log(factoriedData);
                const addedSubjects = await TeacherSubject.relateAllGroupOfSubjects(factoriedData, { transaction });
                console.log("4");
                // await transaction.commit();
                return addedSubjects;
            });
            res.status(result.status).send({
                data: result.data,
            });
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
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

    relateNoteWithStudent: async (req, res) => {
        let data = req.body;
        data.teacher_note_id = req.params.id;
        const result = await new TeacherNoteStudent(data).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateNoteWithOneStudent: async (req, res) => {
        let data = req.body;
        data.teacher_note_id = req.params.id;
        const result = await TeacherNoteStudent.delete(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeahcherNotesForOneStudent: async (req, res) => {
        const {student_id} = req.params;
        const result = await TeacherNote.getAllForOneStudent(student_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeahcherNotesForOneGroup: async (req, res) => {
        const {group_id} = req.params;
        const result = await TeacherNote.getAllForOneGroup(group_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllTeahcherNotesForOneClass: async (req, res) => {
        const {class_id} = req.params;
        const result = await TeacherNote.getAllForOneClass(class_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateNoteWithAllStudentsGroup: async (req, res) => {
        try {
            const teacher_note_id = req.params.id;
            let { student_ids } = req.body;
            const result = await database.transaction(async (t) => {
                console.log("1");
                const deletedSubjects = await TeacherNoteStudent.deleteAllForOneTeacherNote(teacher_note_id, { transaction: t });
                console.log("2");
                const factoriedData = Factory.relateAllStudentssWithOneNote(student_ids, teacher_note_id);
                console.log("3");
                const addedStudents = await TeacherNoteStudent.relateAllGroupOfStudents(factoriedData, { transaction: t });
                console.log("4");
                // await transaction.commit();
                return addedStudents;
            });
            res.status(result.status).send({
                data: result.data,
            });
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    },

}