const { 
    ManagerNoteModel, 
    ManagerNoteStudentModel,
    StudentModel,
    ManagerNoteTeacherModel,
    TeacherModel,
    ManagerNoteGroupModel,
    GroupModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class ManagerNote {

    constructor(data) {
        this.manager_id = data.manager_id;
        this.note = data.note;
        this.type = data.type;
    }

    async add() {
        try {
            const managerNote = await ManagerNoteModel.create(this);
            return {
                data: managerNote,
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
            const managerNote = await ManagerNoteModel.update(this, {
                where: {
                    id: id
                }
            });
            if (managerNote == 1) {
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

    static async getAllWithStudents() {
        try {
            const managerNote = await ManagerNoteModel.findAll({
                where: {
                    type: "student"
                },
                include: [
                    {
                        model: ManagerNoteStudentModel,
                        as: 'manager_note_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student'
                            }
                        ]
                    }
                ]
            });
            return {
                data: managerNote,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllWithTeachers() {
        try {
            const managerNote = await ManagerNoteModel.findAll({
                where: {
                    type: "teacher"
                },
                include: [
                    {
                        model: ManagerNoteTeacherModel,
                        as: 'manager_note_teachers',
                        include: [
                            {
                                model: TeacherModel,
                                as: 'teacher'
                            }
                        ]
                    }
                ]
            });
            return {
                data: managerNote,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllWithGroups() {
        try {
            const managerNote = await ManagerNoteModel.findAll({
                where: {
                    type: "group"
                },
                include: [
                    {
                        model: ManagerNoteGroupModel,
                        as: 'manager_note_groups',
                        include: [
                            {
                                model: GroupModel,
                                as: 'group',
                                include: [
                                    {
                                        model: StudentModel,
                                        as: 'students'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
            return {
                data: managerNote,
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

module.exports = { ManagerNote };