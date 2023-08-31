const { 
    AssignmentModel,
    AssignmentStudentModel,
    StudentModel,
    GroupTeacherSubjectModel,
    TeacherSubjectModel,
    TeacherModel,
    SubjectModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class Assignment {

    constructor(data) {
        this.group_teacher_subject_id = data.group_teacher_subject_id;
        this.date = data.date;
        this.type = data.type;
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
                ]
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