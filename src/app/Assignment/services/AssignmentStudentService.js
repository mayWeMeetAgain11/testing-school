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
            const AssignmentStudentOld = await AssignmentStudentModel.findOne({
                where: {
                    assignment_id: this.assignment_id,
                    student_id: this.student_id,
                    mark: this.mark,
                }
            });
            if (AssignmentStudentOld) {
                const AssignmentStudentOld = await AssignmentStudentModel.destroy({
                    where: {
                        id: AssignmentStudentOld.id
                    }
                });
            }
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
    
    static async delete(data) {
        try {
            const AssignmentStudent = await AssignmentStudentModel.destroy({
                where: {
                    assignment_id: assignment_id,
                    student_id: student_id,
                }
            });
            if (AssignmentStudent != 0) {
                return {
                    data: "deleted",
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: "something went wrong!",
                    status: httpStatus.BAD_REQUEST
                };
            }
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
}

module.exports = { AssignmentStudent };
