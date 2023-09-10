const { 
    TeacherSubjectModel, 
    TeacherModel,
    SubjectModel,
    GroupTeacherSubjectModel,
    GroupModel,
    StudentModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class TeacherSubject {

    constructor(data) {
        this.teacher_id = data.teacher_id;
        this.subject_id = data.subject_id;
    }

    async add() {
        try {
            const teacherSubjectOld = await TeacherSubjectModel.findOne({
                where: {
                    teacher_id: this.teacher_id,
                    subject_id: this.subject_id
                }
            });
            if (!teacherSubjectOld) {
                const teacherSubject = await TeacherSubjectModel.create(this);
            }
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
            if (teacherSubject != 0) {
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
            if (teacherSubject != 0) {
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

    static async getAllTeacherSubjectsForOneStudent(student_id) {
        try {
            const teacherSubjects = await TeacherSubjectModel.findAll({
                include: [
                    {
                        model: TeacherModel,
                        as: 'teacher'
                    },
                    {
                        model: SubjectModel,
                        as: 'subject'
                    },
                    {
                        attributes: [],
                        required: true,
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subjects',
                        include: [
                            {
                                attributes: [],
                                model: GroupModel,
                                as: 'group',
                                include: [
                                    {
                                        attributes: [],
                                        required: true,
                                        model: StudentModel,
                                        as: 'students',
                                        where: {
                                            id: student_id
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                ],
            });
            return {
                data: teacherSubjects,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAll() {
        try {
            const teacherSubjects = await TeacherSubjectModel.findAll({
                include: [
                    {
                        model: TeacherModel,
                        as: 'teacher'
                    },
                    {
                        model: SubjectModel,
                        as: 'subject'
                    },
                ],
            });
            return {
                data: teacherSubjects,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllTeacherSubjectsForOneGroup(group_id) {
        try {
            const teacherSubjects = await TeacherSubjectModel.findAll({
                include: [
                    {
                        model: TeacherModel,
                        as: 'teacher'
                    },
                    {
                        model: SubjectModel,
                        as: 'subject'
                    },
                    {
                        attributes: [],
                        required: true,
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subjects',
                        include: [
                            {
                                attributes: [],
                                model: GroupModel,
                                as: 'group',
                                where: {
                                    id: group_id
                                }
                            }
                        ]
                    },
                ],
            });
            return {
                data: teacherSubjects,
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
