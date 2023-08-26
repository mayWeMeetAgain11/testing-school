
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ScheduleModel extends Model {

        static associate(models) {
            this.belongsTo(models.GroupTeacherSubjectModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'group_teacher_subject'
            }); 
        }
    }
    ScheduleModel.init({
        day: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'ScheduleModel',
        tableName: 'schedules',
        underscored: true
    });
    return ScheduleModel;
};