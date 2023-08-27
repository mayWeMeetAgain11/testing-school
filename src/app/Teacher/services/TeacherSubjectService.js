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

    static async relateAllGroupOfSubjects(data) {
        try {
            const teacherSubjects = await TeacherSubjectModel.bulkCreate(data);
            return {
                data: 'all subjects related successfully',
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
            const teacherSubject = await TeacherSubjectModel.destroy({
                where: {
                    teacher_id: data.teacher_id,
                    subject_id: data.subject_id
                }
            });
            if (teacherSubject == 1) {
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

    static async deleteAllForOneTeacher(teacher_id) {
        try {
            const teacherSubject = await TeacherSubjectModel.destroy({
                where: {
                    teacher_id: teacher_id,
                }
            });
            if (teacherSubject == 1) {
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

module.exports = { TeacherSubject };