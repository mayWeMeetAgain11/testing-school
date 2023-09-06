const { Manager } = require('./services/ManagerService');
const { ManagerNote } = require('./services/ManagerNoteService');
const { ManagerNoteGroup } = require('./services/ManagerNoteGroupService');
const { ManagerNoteTeacher } = require('./services/ManagerNoteTeacherService');
const { ManagerNoteStudent } = require('./services/ManagerNoteStudentService');
const { Factory,  } = require('./services/helper/factory');
const {database} = require('../index');
const httpStatus = require('../../../utils/httpStatus');


module.exports = {

    addManager: async (req, res) => {
        const result = await new Manager(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    addManagerNote: async (req, res) => {
        const result = await new ManagerNote(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateManagerNoteToOneGroup: async (req, res) => {
        const result = await new ManagerNoteGroup(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateManagerNoteToOneGroup: async (req, res) => {
        let data = req.body;
        data.manager_note_id = req.params.manager_note_id;
        const result = await ManagerNoteGroup.delete(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateManagerNoteWithManyGroups: async (req, res) => {
        const {manager_note_id} = req.params;
        const group_teacher_subject_ids = req.body.group_teacher_subject_ids;
        const result = await database.transaction(async (t) => {
            const deletedSubjects = await ManagerNoteGroup.deleteAllForOneManagerNote(manager_note_id, { transaction: t });
            const factoriedData = Factory.relateAllObjectsWithOneProperty(group_teacher_subject_ids, manager_note_id);
            const finalResult = await ManagerNoteGroup.addAll(factoriedData, {transaction: t});
            return finalResult;
        });
        res.status(result.status).send({
            data: result.data,
        });
    },

    addManagerNoteWithAllRelations: async (req, res) => {
        let result;
        if (req.body.type == "group") {
            const group_ids = req.body.group_ids;
            result = await database.transaction(async (t) => {
                const managerNote = await new ManagerNote(req.body).add();
                if (managerNote.status == httpStatus.BAD_REQUEST) {
                    return {
                        data: "bad request or something wrong happend",
                        status: httpStatus.BAD_REQUEST
                    };
                } else {
                    const factoriedData = Factory.relateAllObjectsWithOneProperty(group_ids, managerNote.data.dataValues.id);
                    const finalResult = await ManagerNoteGroup.addAll(factoriedData, {transaction: t});
                    return finalResult;
                }
            });
        } else if (req.body.type == "teacher") {
            const teacher_ids = req.body.teacher_ids;
            result = await database.transaction(async (t) => {
                const managerNote = await new ManagerNote(req.body).add();
                if (managerNote.status == httpStatus.BAD_REQUEST) {
                    return {
                        data: "bad request or something wrong happend",
                        status: httpStatus.BAD_REQUEST
                    };
                } else {
                    const factoriedData = Factory.relateAllTeachersWithOneManagerNote(teacher_ids, managerNote.data.dataValues.id);
                    const finalResult = await ManagerNoteTeacher.addAll(factoriedData, {transaction: t});
                    return finalResult;
                }
            });
        } else {
            const student_ids = req.body.student_ids;
            result = await database.transaction(async (t) => {
                const managerNote = await new ManagerNote(req.body).add();
                if (managerNote.status == httpStatus.BAD_REQUEST) {
                    return {
                        data: "bad request or something wrong happend",
                        status: httpStatus.BAD_REQUEST
                    };
                } else {
                    const factoriedData = Factory.relateAllStudentsWithOneManagerNote(student_ids, managerNote.data.dataValues.id);
                    const finalResult = await ManagerNoteStudent.addAll(factoriedData, {transaction: t});
                    return finalResult;
                }
            });
        }
        
        res.status(result.status).send({
            data: result.data,
        });
    },

    managerLogin: async (req, res) => {
        const {email, password} = req.body;
        const result = await Manager.login(email, password);
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateManager: async (req, res) => {
        const result = await new Manager(req.body).update(req.user.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateManagerNote: async (req, res) => {
        const {manager_note_id} = req.params;
        const result = await new ManagerNote(req.body).update(manager_note_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllManagerNoteWithTypeCondition: async (req, res) => {
        let result;
        if (req.body.type == "group") {
            result = await ManagerNote.getAllWithGroups();
        } else if (req.body.type == "teacher") {
            result = await ManagerNote.getAllWithTeachers();
        } else {
            result = await ManagerNote.getAllWithStudents();
        }
        // result = await ManagerNote.getAllWithTypeCondition(req.body.type);
        res.status(result.status).send({
            data: result.data,
        });
    },

}