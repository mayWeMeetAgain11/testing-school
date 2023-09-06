const { ManagerNoteStudentModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ManagerNoteStudent {

    constructor(data) {
        this.manager_note_id = data.manager_note_id;
        this.student_id = data.student_id;
    }

    async add() {
        try {
            const ManagerNoteStudent = await ManagerNoteStudentModel.create(this);
            return {
                data: ManagerNoteStudent,
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
            const ManagerNoteStudent = await ManagerNoteStudentModel.bulkCreate(data);
            return {
                data: ManagerNoteStudent,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async deleteAllForOneManagerNote(manager_note_id) {
        try {
            const ManagerNoteStudent = await ManagerNoteStudentModel.destroy({
                where: {
                    manager_note_id: manager_note_id
                }
            });
            if (ManagerNoteStudent >= 0) {
                return {
                    data: ManagerNoteStudent,
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something went wrong',
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

    static async delete(data) {
        try {
            const ManagerNoteStudent = await ManagerNoteStudentModel.destroy({
                where: {
                    manager_note_id: data.manager_note_id,
                    student_id: data.student_id
                }
            });
            if (ManagerNoteStudent >= 0) {
                return {
                    data: 'deleted',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something went wrong',
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

module.exports = { ManagerNoteStudent };