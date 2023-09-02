const { Manager } = require('./services/ManagerService');
const { ManagerNote } = require('./services/ManagerNoteService');
const { ManagerNoteGroup } = require('./services/ManagerNoteGroupService');
const { Factory,  } = require('./services/helper/factory');
const {database} = require('../index');


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

    relateManagerNoteWithManyGroups: async (req, res) => {
        const {manager_note_id} = req.params;
        const group_teacher_subject_ids = req.body.group_teacher_subject_ids;
        console.log(group_teacher_subject_ids);
        console.log(manager_note_id);
        const result = await database.transaction(async (t) => {
            const deletedSubjects = await ManagerNoteGroup.deleteAllForOneManagerNote(manager_note_id, { transaction: t });
            console.log("2");
            const factoriedData = Factory.relateAllObjectsWithOneProperty(group_teacher_subject_ids, manager_note_id);
            // console.log(factoriedData);
            const finalResult = await ManagerNoteGroup.addAll(factoriedData, {transaction: t});
            // console.log(finalResult);
            // await transaction.commit();
            return finalResult;
        });
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

}