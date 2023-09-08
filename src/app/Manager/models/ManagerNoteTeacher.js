
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ManagerNoteTeacherModel extends Model {

        static associate(models) {
            this.belongsTo(models.ManagerNoteModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note'
            }); 
            this.belongsTo(models.TeacherModel, {
                foreignKey: 'teacher_id',
                as: 'teacher'
            }); 
        }
    }
    ManagerNoteTeacherModel.init({

    }, {
        sequelize,
        modelName: 'ManagerNoteTeacherModel',
        tableName: 'manager_note_teachers',
        underscored: true
    });
    return ManagerNoteTeacherModel;
};