
const { Model } = require('sequelize');
const { type } = require('./enum.json');

module.exports = (sequelize, DataTypes) => {
    class AssignmentModel extends Model {

        static associate(models) {
            this.hasMany(models.AssignmentStudentModel, {
                foreignKey: 'assignment_id',
                as: 'assignment_students'
            }); 
            this.belongsTo(models.GroupTeacherSubjectModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'group_teacher_subject'
            }); 
        }
    }
    AssignmentModel.init({
        type: {
            type: DataTypes.ENUM,
            values: type,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'AssignmentModel',
        tableName: 'assignments',
        underscored: true
    });
    return AssignmentModel;
};