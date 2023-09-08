const { GroupTeacherSubjectModel, 
    TeacherSubjectModel,
    SubjectModel,
    TeacherModel,
    GroupModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class GroupTeacherSubject {

    constructor(data) {
        this.group_id = data.group_id;
        this.teacher_subject_id = data.teacher_subject_id;
    }

    async add() {
        try {
            const groupTeacherSubject = await GroupTeacherSubjectModel.create(this);
            return {
                data: 'related succcuessfully',
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
            const groupTeacherSubject = await GroupTeacherSubjectModel.destroy({
                where: {
                    group_id: data.group_id,
                    teacher_subject_id: data.teacher_subject_id
                }
            });
            console.log(groupTeacherSubject);
            if (groupTeacherSubject != 0) {
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
    
    static async getAll() {
        try {
            const groupTeacherSubjects = await GroupTeacherSubjectModel.findAll({
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
                                as: 'subject'
                            },
                            {
                                model: TeacherModel,
                                as: 'teacher'
                            },
                        ]
                    },
                ]
            });
            return {
                data: groupTeacherSubjects,
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
            const groupTeacherSubjects = await GroupTeacherSubjectModel.findAll({
                where: {
                    group_id: group_id
                },
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
                                as: 'subject'
                            },
                            {
                                model: TeacherModel,
                                as: 'teacher'
                            },
                        ]
                    },
                ]
            });
            return {
                data: groupTeacherSubjects,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async deleteAllForOneGroup(group_id) {
        try {
            const groupTeacherSubjects = await GroupTeacherSubjectModel.destroy({
                where: {
                    group_id: group_id,
                }
            });
            if (groupTeacherSubjects != 0) {
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

    static async relateAllGroupOfTeacherSubjects(data) {
        try {
            const groupTeacherSubjects = await GroupTeacherSubjectModel.bulkCreate(data);
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

}

module.exports = { GroupTeacherSubject };