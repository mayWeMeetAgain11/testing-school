const { Group } = require('./services/GroupService');
const { GroupTeacherSubject } = require('./services/GroupTeacherSubjectService');
const { Factory,  } = require('./services/helper/factory');
const httpStatus = require('../../../utils/httpStatus');
const {database} = require('../index');


module.exports = {

    addGroup: async (req, res) => {
        const result = await new Group(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateGroup: async (req, res) => {
        const result = await new Group(req.body).update(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    addTeacherSubjectToGroup: async (req, res) => {
        const result = await new GroupTeacherSubject(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateGroupWithOneTeacherSubject: async (req, res) => {
        const {teacher_subject_id} = req.params;
        let data = req.body;
        data.teacher_subject_id = teacher_subject_id;
        const result = await GroupTeacherSubject.delete(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateAllGroupOfTeacherSubjectsToGroup: async (req, res) => {
        try {
            const {group_id} = req.params;
            let {teacher_subject_ids} = req.body;
            const result = await database.transaction(async (t) => {
                console.log("1");
                const deletedSubjects = await GroupTeacherSubject.deleteAllForOneGroup(group_id, { transaction: t });
                console.log("2");
                const factoriedData = Factory.relateAllObjectsWithOneProperty(teacher_subject_ids, group_id);
                console.log("3");
                console.log(factoriedData);
                const addedTeacherSubjects = await GroupTeacherSubject.relateAllGroupOfTeacherSubjects(factoriedData, { transaction: t });
                console.log("4");
                // await transaction.commit();
                return addedTeacherSubjects;
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

    deleteGroup: async (req, res) => {
        const result = await Group.delete(req.params.id);
        res.status(result.status).send({
            data: result.data,
        });
    },

}