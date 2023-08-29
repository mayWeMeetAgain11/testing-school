const { Session } = require('./services/SessionService');
const { ExistingStudent } = require('./services/ExistingStudentService');
const httpStatus = require('../../../utils/httpStatus');
const {database} = require('../index');


module.exports = {

    addSession: async (req, res) => {
        const result = await new Session(req.body).add();
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

}