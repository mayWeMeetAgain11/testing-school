
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ExistingStudent extends Model {

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
    ExistingStudent.init({
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'ExistingStudent',
        tableName: 'existing_students',
        underscored: true
    });
    return ExistingStudent;
};