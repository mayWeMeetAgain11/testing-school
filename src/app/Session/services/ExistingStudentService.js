const { ExistingStudentModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ExistingStudent {

    constructor(data) {
        this.student_id = data.student_id;
        this.session_id = data.session_id;
    }

    async add() {
        try {
            const existingStudent = await ExistingStudentModel.create(this);
            return {
                data: 'related successfully',
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async relateAllGroupOfStudents(data) {
        try {
            const existingStudent = await ExistingStudentModel.bulkCreate(data);
            return {
                data: 'related successfully',
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async delete(existing_student_id) {
        try {
            const deletedExistingStudent = await ExistingStudentModel.destroy({
                where: {
                    id: existing_student_id
                }
            });
            if (deletedExistingStudent == 1) {
                return {
                    data: 'deleted successfully',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something bad happened',
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

    static async deleteAllForOneSession(session_id) {
        try {
            const deletedExistingStudent = await ExistingStudentModel.destroy({
                where: {
                    session_id: session_id
                }
            });
            if (deletedExistingStudent != 0) {
                return {
                    data: 'deleted successfully',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something bad happened',
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

module.exports = { ExistingStudent };