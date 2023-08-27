const { TeacherNoteStudentModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class TeacherNoteStudent {

    constructor(data) {
        this.teacher_note_id = data.teacher_note_id;
        this.student_id = data.student_id;
    }

    async add() {
        try {
            const teacherNoteStudent = await TeacherNoteStudentModel.create(this);
            return {
                data: teacherNoteStudent,
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
            const deletedRecord = await TeacherNoteStudentModel.destroy({
                where: {
                    teacher_note_id: data.teacher_note_id,
                    student_id: data.student_id
                }
            });
            if (deletedRecord != 0) {
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

module.exports = { TeacherNoteStudent };