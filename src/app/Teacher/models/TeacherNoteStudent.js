
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TeacherNoteStudentModel extends Model {

        static associate(models) {
            this.belongsTo(models.TeacherNoteModel, {
                foreignKey: 'teacher_note_id',
                as: 'teacher_note'
            }); 
            this.belongsTo(models.StudentModel, {
                foreignKey: 'student_id',
                as: 'student'
            }); 
        }
    }
    TeacherNoteStudentModel.init({

    }, {
        sequelize,
        modelName: 'TeacherNoteStudentModel',
        tableName: 'teacher_note_students',
        underscored: true
    });
    return TeacherNoteStudentModel;
};