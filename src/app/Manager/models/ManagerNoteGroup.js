
const { Model } = require('sequelize');
const { type } = require('./enum.json');

module.exports = (sequelize, DataTypes) => {
    class ManagerNoteGroupModel extends Model {

        static associate(models) {
            this.belongsTo(models.ManagerNoteModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note'
            }); 
            this.belongsTo(models.GroupTeacherSubjectModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'group_teacher_subject'
            }); 
        }
    }
    ManagerNoteGroupModel.init({

    }, {
        sequelize,
        modelName: 'ManagerNoteGroupModel',
        tableName: 'manager_note_groups',
        underscored: true
    });
    return ManagerNoteGroupModel;
};