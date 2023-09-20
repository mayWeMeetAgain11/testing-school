const { 
    AssignmentModel,
    AssignmentStudentModel,
    StudentModel,
    GroupTeacherSubjectModel,
    TeacherSubjectModel,
    TeacherModel,
    SubjectModel,
    AssignmentPdfModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');
const { Op } = require('sequelize');

class Assignment {

    constructor(data) {
        this.group_teacher_subject_id = data.group_teacher_subject_id;
        this.date = data.date;
        this.type = data.type;
        this.total_mark = data.total_mark;
    }

    async add() {
        try {
            const Assignment = await AssignmentModel.create(this);
            return {
                data: Assignment,
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
            const Assignment = await AssignmentModel.findAll({
                include: [
                    {
                        model: AssignmentPdfModel,
                        as: 'assignment_pdfs'
                    },
                    {
                        model: AssignmentStudentModel,
                        as: 'assignment_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                            }
                        ]
                    },
                    {
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                        
                                    },
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                        
                                    },
                                ]
                            }
                        ]
                    },
                ],
                order: ['date']
            });
            return {
                data: Assignment,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllForFuture() {
        try {
            const date = new Date();
            const Assignment = await AssignmentModel.findAll({
                where: {
                    date: {
                        [Op.gte]: date
                    }
                },
                include: [
                    {
                        model: AssignmentPdfModel,
                        as: 'assignment_pdfs'
                    },
                    {
                        model: AssignmentStudentModel,
                        as: 'assignment_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                            }
                        ]
                    },
                    {
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                        
                                    },
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                        
                                    },
                                ]
                            }
                        ]
                    },
                ],
                order: ['date']
            });
            return {
                data: Assignment,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllForFutureForOneGroup(group_id) {
        try {
            const date = new Date();
            const Assignment = await AssignmentModel.findAll({
                where: {
                    date: {
                        [Op.gte]: date
                    },
                },
                include: [
                    {
                        model: AssignmentPdfModel,
                        as: 'assignment_pdfs'
                    },
                    {
                        model: AssignmentStudentModel,
                        as: 'assignment_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                            }
                        ]
                    },
                    {
                        required: true,
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        where: {
                            group_id: group_id
                        },
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                        
                                    },
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                        
                                    },
                                ]
                            }
                        ]
                    },
                ],
                order: ['date']
            });
            return {
                data: Assignment,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllPassed() {
        try {
            const date = new Date();
            const Assignment = await AssignmentModel.findAll({
                where: {
                    date: {
                        [Op.lte]: date
                    }
                },
                include: [
                    {
                        model: AssignmentPdfModel,
                        as: 'assignment_pdfs'
                    },
                    {
                        model: AssignmentStudentModel,
                        as: 'assignment_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                            }
                        ]
                    },
                    {
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                        
                                    },
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                        
                                    },
                                ]
                            }
                        ]
                    },
                ],
                order: ['date']
            });
            return {
                data: Assignment,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllPassedWithItsInfoForOneStudent(student_id) {
        try {
            const date = new Date();
            const Assignment = await AssignmentModel.findAll({
                where: {
                    date: {
                        [Op.lte]: date
                    }
                },
                include: [
                    {
                        model: AssignmentPdfModel,
                        as: 'assignment_pdfs'
                    },
                    {
                        required: true,
                        model: AssignmentStudentModel,
                        as: 'assignment_students',
                        include: [
                            {
                                required: true,
                                model: StudentModel,
                                as: 'student',
                                where: {
                                    id: student_id
                                }
                            }
                        ]
                    },
                    {
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                        
                                    },
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                        
                                    },
                                ]
                            }
                        ]
                    },
                ],
                order: ['date']
            });
            return {
                data: Assignment,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async update(data) {
        try {
            const assignment = await AssignmentModel.findByPk(data.assignment_id);
            assignment.date = data.date || assignment.date;
            assignment.group_teacher_subject_id = data.group_teacher_subject_id || assignment.group_teacher_subject_id;
            assignment.type = data.type || assignment.type;
            assignment.save();
            return {
                data: 'updated successfully',
                status: httpStatus.OK
            };

        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async delete(id) {
        try {
            const assignment = await AssignmentModel.destroy({
                where: {
                    id: id
                }
            });
            if (assignment != 0) {
                return {
                    data: "deleted",
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: "something went wrong!",
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

module.exports = { Assignment };
