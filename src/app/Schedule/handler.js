const { Schedule } = require('./service');


module.exports = {

    addSchedule: async (req, res) => {
        const result = await new Schedule(req.body).add();
        res.status(result.status).send({
            data: result.data,
        });
    },

    deleteSchedule: async (req, res) => {
        const result = await Schedule.delete(req.params.schedule_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    addTheWholeSchedule: async (req, res) => {
        const result = await Schedule.addAll(req.body.data);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllScheduleForOneGroup: async (req, res) => {
        const result = await Schedule.getAllForOneGroup(req.params.group_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllScheduleForOneTeacher: async (req, res) => {
        const result = await Schedule.getAllForOneTeacher(req.params.teacher_id);
        res.status(result.status).send({
            data: result.data,
        });
    },

    getAllSchedule: async (req, res) => {
        const result = await Schedule.getAll();
        res.status(result.status).send({
            data: result.data,
        });
    },

}