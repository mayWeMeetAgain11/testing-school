
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TeacherNoteModel extends Model {

        static associate(models) {
            this.belongsTo(models.TeacherModel, {
                foreignKey: 'teacher_id',
                as: 'teacher'
            }); 
            this.hasMany(models.TeacherNoteStudentModel, {
                foreignKey: 'teacher_note_id',
                as: 'teacher_note_students'
            }); 
        }
    }
    TeacherNoteModel.init({
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'TeacherNoteModel',
        tableName: 'teacher_notes',
        underscored: true
    });
    return TeacherNoteModel;
};