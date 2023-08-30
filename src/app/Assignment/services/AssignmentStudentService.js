const { AssignmentStudentModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class AssignmentStudent {

    constructor(data) {
        this.assignment_id = data.assignment_id;
        this.student_id = data.student_id;
        this.mark = data.mark;
    }

    async add() {
        try {
            const AssignmentStudent = await AssignmentStudentModel.create(this);
            return {
                data: AssignmentStudent,
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

module.exports = { AssignmentStudent };