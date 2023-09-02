const { ScheduleModel} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Schedule {

    constructor(data) {
        this.day = data.day;
        this.start_time = data.start_time;
        this.end_time = data.end_time;
        this.group_teacher_subject_id = data.group_teacher_subject_id;
    }

    async add() {
        try {
            const Schedule = await ScheduleModel.create(this);
            return {
                data: Schedule,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async addAll(data) {
        try {
            const Schedule = await ScheduleModel.bulkCreate(data);
            return {
                data: Schedule,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

}

module.exports = { Schedule };