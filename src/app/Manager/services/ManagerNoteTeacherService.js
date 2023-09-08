const { ManagerNoteTeacherModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ManagerNoteTeacher {

    constructor(data) {
        this.manager_note_id = data.manager_note_id;
        this.teacher_id = data.teacher_id;
    }

    async add() {
        try {
            const ManagerNoteTeacher = await ManagerNoteTeacherModel.create(this);
            return {
                data: ManagerNoteTeacher,
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
            const ManagerNoteTeacher = await ManagerNoteTeacherModel.bulkCreate(data);
            return {
                data: ManagerNoteTeacher,
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
            const ManagerNoteTeacher = await ManagerNoteTeacherModel.destroy({
                where: {
                    manager_note_id: manager_note_id
                }
            });
            if (ManagerNoteTeacher >= 0) {
                return {
                    data: ManagerNoteTeacher,
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
            const ManagerNoteTeacher = await ManagerNoteTeacherModel.destroy({
                where: {
                    manager_note_id: data.manager_note_id,
                    teacher_id: data.teacher_id
                }
            });
            if (ManagerNoteTeacher >= 0) {
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

module.exports = { ManagerNoteTeacher };