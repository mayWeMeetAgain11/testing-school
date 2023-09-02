const { 
    ClassModel, 
    GroupModel, 
    GroupTeacherSubjectModel,
    TeacherSubjectModel,
    SubjectModel,
    TeacherModel,
    StudentModel,
} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Class {

    constructor(data) {
        this.name = data.name;
    }

    async add() {
        try {
            const classVar = await ClassModel.create(this);
            return {
                data: classVar,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    async update(id) {
        try {
            const classVar = await ClassModel.update(this, {
                where: {
                    id: id
                }
            });
            if (classVar == 1) {
                return {
                    data: "updated",
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
    
    static async delete(id) {
        try {
            const classVar = await ClassModel.destroy({
                where: {
                    id: id
                }
            });
            if (classVar != 0) {
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
    
    static async getAll() {
        try {
            const classes = await ClassModel.findAll({
                include: [
                    {
                        model: GroupModel,
                        as:'groups'
                    }
                ]
            });
            return {
                data: classes,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }
    
    static async getAllWithInfoForOneStudent(teacher_id) {
        try {
            const classes = await ClassModel.findAll({
                include: [
                    {
                        required: true,
                        model: GroupModel,
                        as:'groups',
                        include: [
                            {
                                required: true,
                                model: GroupTeacherSubjectModel,
                                as: 'group_teacher_subjects',
                                include: [
                                    {
                                        required: true,
                                        model: TeacherSubjectModel,
                                        as: 'teacher_subject',
                                        where: {
                                            teacher_id: teacher_id
                                        },
                                        include: [
                                            {
                                                model: SubjectModel,
                                                as: 'subject'
                                            },
                                            {
                                                model: TeacherModel,
                                                as: 'teacher'
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                required: true,
                                model: StudentModel,
                                as: 'students',
                            }
                        ]
                    }
                ]
            });
            return {
                data: classes,
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

module.exports = { Class };