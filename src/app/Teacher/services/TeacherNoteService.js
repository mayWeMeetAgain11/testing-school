const { 
    TeacherNoteModel, 
    TeacherModel,
    TeacherSubjectModel,
    TeacherNoteStudentModel,
    GroupModel,
    ClassModel,
    StudentModel,
    SubjectModel,
} = require('../../index');
const httpStatus = require('../../../../utils/httpStatus');

class TeacherNote {

    constructor(data) {
        this.note = data.note;
        this.teacher_id = data.teacher_id;
    }

    async add() {
        try {
            const teacherNote = await TeacherNoteModel.create(this);
            return {
                data: teacherNote,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async delete(note_id) {
        try {
            const deletedNote = await TeacherNoteModel.destroy({
                where: {
                    id: note_id,
                }
            });
            if (deletedNote == 1) {
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

    async update(note_id) {
        try {
            const updatedNote = await TeacherNoteModel.update( this, {
                where: {
                    id: note_id,
                }
            });
            if (updatedNote == 1) {
                return {
                    data: 'updated',
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

    static async getAllForOneStudent(student_id) {
        try {
            const teacherNotes = await TeacherNoteModel.findAll({
                include: [
                    {
                        model: TeacherModel,
                        as: 'teacher',
                        include: [
                            {
                                model: TeacherSubjectModel,
                                as: 'teacher_subjects',
                                include: [
                                    {
                                        model: SubjectModel,
                                        as: 'subject'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        attributes: [],
                        required: true,
                        model: TeacherNoteStudentModel,
                        as: 'teacher_note_students',
                        where: {
                            student_id: student_id
                        }
                    },
                ]
            });
            return {
                data: teacherNotes,
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
            const teacherNotes = await TeacherNoteModel.findAll({
                where: {
                    id: teacher_id
                },
                include: [
                    {
                        model: TeacherModel,
                        as: 'teacher',
                    },
                    {
                        required: true,
                        model: TeacherNoteStudentModel,
                        as: 'teacher_note_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                                include: [
                                    {
                                        model: GroupModel,
                                        as: 'group',
                                        include: [
                                            {
                                                model: ClassModel,
                                                as: 'class'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            });
            return {
                data: teacherNotes,
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
            const teacherNotes = await TeacherNoteModel.findAll({
                include: [
                    {
                        required: true,
                        model: TeacherModel,
                        as: 'teacher',
                        include: [
                            {
                                required: true,
                                model: TeacherSubjectModel,
                                as: 'teacher_subjects',
                                include: [
                                    {
                                        model: SubjectModel,
                                        as: 'subject'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        required: true,
                        model: TeacherNoteStudentModel,
                        as: 'teacher_note_students',
                        include: [
                            {
                                model: StudentModel,
                                as: 'student',
                                where: {
                                    group_id: group_id
                                }
                            }
                        ]
                    },
                ]
            });
            return {
                data: teacherNotes,
                status: httpStatus.OK
            };
        } catch (error) {
            return {
                data: error.message,
                status: httpStatus.BAD_REQUEST
            }
        }
    }

    static async getAllForOneClass(class_id) {
        try {
            const teacherNotes = await TeacherNoteModel.findAll({
                include: [
                    {
                        required: true,
                        model: TeacherModel,
                        as: 'teacher',
                        include: [
                            {
                                required: true,
                                model: TeacherSubjectModel,
                                as: 'teacher_subjects',
                                include: [
                                    {
                                        model: SubjectModel,
                                        as: 'subject'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        required: true,
                        model: TeacherNoteStudentModel,
                        as: 'teacher_note_students',
                        include: [
                            {
                                required: true,
                                model: StudentModel,
                                as: 'student',
                                include: [
                                    {
                                        required: true,
                                        model: GroupModel,
                                        as: 'group',
                                        where: {
                                            class_id: class_id
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                ]
            });
            return {
                data: teacherNotes,
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

module.exports = { TeacherNote };