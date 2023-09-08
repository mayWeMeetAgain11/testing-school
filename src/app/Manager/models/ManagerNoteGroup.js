
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ManagerNoteGroupModel extends Model {

        static associate(models) {
            this.belongsTo(models.ManagerNoteModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note'
            }); 
            this.belongsTo(models.GroupModel, {
                foreignKey: 'group_id',
                as: 'group'
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