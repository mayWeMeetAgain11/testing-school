
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ExistingStudentModel extends Model {

        static associate(models) {
            this.belongsTo(models.StudentModel, {
                foreignKey: 'student_id',
                as: 'student'
            }); 
            this.belongsTo(models.SessionModel, {
                foreignKey: 'session_id',
                as: 'session'
            }); 
        }
    }
    ExistingStudentModel.init({
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'ExistingStudentModel',
        tableName: 'existing_students',
        underscored: true
    });
    return ExistingStudentModel;
};