
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ManagerNoteStudentModel extends Model {

        static associate(models) {
            this.belongsTo(models.ManagerNoteModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note'
            }); 
            this.belongsTo(models.StudentModel, {
                foreignKey: 'student_id',
                as: 'student'
            }); 
        }
    }
    ManagerNoteStudentModel.init({

    }, {
        sequelize,
        modelName: 'ManagerNoteStudentModel',
        tableName: 'manager_note_students',
        underscored: true
    });
    return ManagerNoteStudentModel;
};