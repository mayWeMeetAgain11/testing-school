
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class GroupModel extends Model {

        static associate(models) {
            this.belongsTo(models.ClassModel, {
                foreignKey: 'class_id',
                as: 'class'
            }); 
            this.hasMany(models.StudentModel, {
                foreignKey: 'group_id',
                as: 'students'
            }); 
            this.hasMany(models.GroupTeacherSubjectModel, {
                foreignKey: 'group_id',
                as: 'group_teacher_subjects'
            });
            this.hasMany(models.ManagerNoteGroupModel, {
                foreignKey: 'group_id',
                as: 'manager_note_groups'
            }); 
        }
    }
    GroupModel.init({
        number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'GroupModel',
        tableName: 'groups',
        underscored: true
    });
    return GroupModel;
};