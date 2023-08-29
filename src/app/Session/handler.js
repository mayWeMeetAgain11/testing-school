const { Session } = require('./services/SessionService');
const httpStatus = require('../../../utils/httpStatus');
const {database} = require('../index');


module.exports = {

    addSession: async (req, res) => {
        const result = await new Session(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}