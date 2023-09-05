const { ScheduleModel, 
    GroupTeacherSubjectModel, 
    TeacherSubjectModel,
    SubjectModel,
    TeacherModel,
    GroupModel,
} = require('../index');
const httpStatus = require('../../../utils/httpStatus');

class Schedule {

    constructor(data) {
        this.day = data.day;
        this.start_time = data.start_time;
        this.end_time = data.end_time;
        this.group_teacher_subject_id = data.group_teacher_subject_id;
    }

    async add() {
        try {
            const Schedule = await ScheduleModel.create(this);
            return {
                data: Schedule,
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
            const Schedule = await ScheduleModel.destroy({
                where: {
                    id: id
                }
            });
            if (Schedule > 0) {
                return {
                    data: 'deleted',
                    status: httpStatus.OK
                };
            } else {
                return {
                    data: 'something went wrong',
                    atatus: httpStatus.BAD_REQUEST
                }
            }
            
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async addAll(data) {
        try {
            const Schedule = await ScheduleModel.bulkCreate(data);
            return {
                data: Schedule,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllForOneGroup(group_id) {
        try {
            const Schedule = await ScheduleModel.findAll({
                include: [
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
                                        model: SubjectModel,
                                        as: 'subject',
                                    },
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                    },
                                ]
                            }
                        ]
                    }
                ]
            });
            return {
                data: Schedule,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    
    static async getAllForOneTeacher(teacher_id) {
        try {
            const Schedule = await ScheduleModel.findAll({
                include: [
                    {
                        required: true,
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                reuired: true,
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                where: {
                                    teacher_id: teacher_id
                                },
                                include: [
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                    },
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',

                                    },
                                ]
                            }
                        ]
                    }
                ]
            });
            return {
                data: Schedule,
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
            const Schedule = await ScheduleModel.findAll({
                include: [
                    {
                        required: true,
                        model: GroupTeacherSubjectModel,
                        as: 'group_teacher_subject',
                        include: [
                            {
                                model: GroupModel,
                                as: 'group'
                            },
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subject',
                                include: [
                                    {
                                        model: SubjectModel,
                                        as: 'subject',
                                    },
                                    {
                                        model: TeacherModel,
                                        as: 'teacher',
                                    },
                                ]
                            }
                        ]
                    }
                ]
            });
            return {
                data: Schedule,
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

module.exports = { Schedule };