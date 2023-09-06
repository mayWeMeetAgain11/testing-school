
const { Model } = require('sequelize');
const { type } = require('./enum.json');

module.exports = (sequelize, DataTypes) => {
    class ManagerNoteModel extends Model {

        static associate(models) {
            this.belongsTo(models.ManagerModel, {
                foreignKey: 'manager_id',
                as: 'manager'
            }); 
            this.hasMany(models.ManagerNoteGroupModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note_groups'
            }); 
            this.hasMany(models.ManagerNoteTeacherModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note_teachers'
            }); 
            this.hasMany(models.ManagerNoteStudentModel, {
                foreignKey: 'manager_note_id',
                as: 'manager_note_students'
            }); 
        }
    }
    ManagerNoteModel.init({
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: type,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'ManagerNoteModel',
        tableName: 'manager_notes',
        underscored: true
    });
    return ManagerNoteModel;
};