const { Session } = require('./services/SessionService');
const { ExistingStudent } = require('./services/ExistingStudentService');
const httpStatus = require('../../../utils/httpStatus');
const { Factory } = require('../Teacher/services/helper/factory');
const { database } = require('../index');


module.exports = {

    addSession: async (req, res) => {
        const result = await new Session(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllSessionsWithInfo: async (req, res) => {
        const result = await Session.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllSessionsWithInfoInDateRange: async (req, res) => {
        const result = await Session.getAllInDateRange(req.body);
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteSession: async (req, res) => {
        const result = await Session.delete(req.params.session_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    updateSession: async (req, res) => {
        let data = req.body;
        data.session_id = req.params.session_id;
        const result = await Session.update(data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateSessionWithStudent: async (req, res) => {
        let data = req.body;
        data.session_id = req.params.session_id;
        const result = await new ExistingStudent(data).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    unRelateSessionWithStudent: async (req, res) => {
        const { existing_student_id } = req.params;
        const result = await ExistingStudent.delete(existing_student_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    relateSessionWithAllStudents: async (req, res) => {
        try {
            const { session_id } = req.params;
            let { student_ids } = req.body;
            const result = await database.transaction(async (t) => {
                console.log("1");
                const deletedExistingStudents = await ExistingStudent.deleteAllForOneSession(session_id, { transaction: t });
                console.log("2");
                const factoriedData = Factory.relateAllStudentsWithOneSession(student_ids, session_id);
                console.log("3");
                const existingStudents = await ExistingStudent.relateAllGroupOfStudents(factoriedData, { transaction: t });
                console.log("4");
                return existingStudents;
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