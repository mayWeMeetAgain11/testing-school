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

}

module.exports = { TeacherNoteStudent };