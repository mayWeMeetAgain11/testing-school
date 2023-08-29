const { AssignmentModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Assignment {

    constructor(data) {
        this.group_teacher_subject_id = data.group_teacher_subject_id;
        this.date = data.date;
        this.type = data.type;
    }

    async add() {
        try {
            const Assignment = await AssignmentModel.create(this);
            return {
                data: Assignment,
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

module.exports = { Assignment };