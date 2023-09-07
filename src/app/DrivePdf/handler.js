const { DrivePdf } = require('./service');


module.exports = {

    addDrivePdf: async (req, res) => {
        const result = await DrivePdf.add(req.body);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getDrivePdf: async (req, res) => {
        const result = await DrivePdf.get();
        res.status(result.status).send({
            data: result.data,
        });
    },

}