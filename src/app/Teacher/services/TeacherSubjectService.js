const { TeacherSubjectModel} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class TeacherSubject {

    constructor(data) {
        this.teacher_id = data.teacher_id;
        this.subject_id = data.subject_id;
    }

    async add() {
        try {
            const teacherSubject = await TeacherSubjectModel.create(this);
            return {
                data: teacherSubject,
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

module.exports = { TeacherSubject };