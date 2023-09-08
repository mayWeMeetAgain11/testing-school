
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SessionModel extends Model {

        static associate(models) {
            this.belongsTo(models.GroupTeacherSubjectModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'group_teacher_subject'
            });
            this.hasMany(models.ExistingStudentModel, {
                foreignKey: 'session_id',
                as: 'existing_students'
            }); 
        }
    }
    SessionModel.init({
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'SessionModel',
        tableName: 'sessions',
        underscored: true
    });
    return SessionModel;
};