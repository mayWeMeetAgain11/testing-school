
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class AssignmentStudentModel extends Model {

        static associate(models) {
            this.belongsTo(models.AssignmentModel, {
                foreignKey: 'assignment_id',
                as: 'assignment'
            }); 
        }
    }
    AssignmentStudentModel.init({
        mark: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        sequelize,
        modelName: 'AssignmentStudentModel',
        tableName: 'assignment_students',
        underscored: true
    });
    return AssignmentStudentModel;
};