const { ManagerNoteGroupModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ManagerNoteGroup {

    constructor(data) {
        this.manager_note_id = data.manager_note_id;
        this.group_teacher_subject_id = data.group_teacher_subject_id;
    }

    async add() {
        try {
            const ManagerNoteGroup = await ManagerNoteGroupModel.create(this);
            return {
                data: ManagerNoteGroup,
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
            const ManagerNoteGroup = await ManagerNoteGroupModel.bulkCreate(data);
            return {
                data: ManagerNoteGroup,
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
            const ManagerNoteGroup = await ManagerNoteGroupModel.destroy({
                where: {
                    id: manager_note_id
                }
            });
            if (ManagerNoteGroup >= 0) {
                return {
                    data: ManagerNoteGroup,
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

module.exports = { ManagerNoteGroup };