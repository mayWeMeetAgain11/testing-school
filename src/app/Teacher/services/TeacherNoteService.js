const { TeacherNoteModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class TeacherNote {

    constructor(data) {
        this.note = data.note;
        this.teacher_id = data.teacher_id;
    }

    async add() {
        try {
            const teacherNote = await TeacherNoteModel.create(this);
            return {
                data: teacherNote,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async delete(note_id) {
        try {
            const deletedNote = await TeacherNoteModel.destroy({
                where: {
                    id: note_id,
                }
            });
            if (deletedNote == 1) {
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

module.exports = { TeacherNote };