const { Schedule } = require('./service');


module.exports = {

    addSchedule: async (req, res) => {
        const result = await new Schedule(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

}