const { SessionModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Session {

    constructor(data) {
        this.group_teacher_subject_id = data.group_teacher_subject_id;
        this.date = data.date;
    }

    async add() {
        try {
            const session = await SessionModel.create(this);
            return {
                data: session,
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

module.exports = { Session };