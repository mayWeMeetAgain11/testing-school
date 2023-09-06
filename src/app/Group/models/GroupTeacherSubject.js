
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class GroupTeacherSubjectModel extends Model {

        static associate(models) {
            this.belongsTo(models.GroupModel, {
                foreignKey: 'group_id',
                as: 'group'
            }); 
            this.belongsTo(models.TeacherSubjectModel, {
                foreignKey: 'teacher_subject_id',
                as: 'teacher_subject'
            }); 
            this.hasMany(models.SessionModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'sessions'
            }); 
            this.hasMany(models.AssignmentModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'assignments'
            }); 
            this.hasMany(models.ScheduleModel, {
                foreignKey: 'group_teacher_subject_id',
                as: 'schedules'
            }); 
            // this.hasMany(models.ManagerNoteGroupModel, {
            //     foreignKey: 'group_teacher_subject_id',
            //     as: 'manager_group_notes'
            // }); 
        }
    }
    GroupTeacherSubjectModel.init({

    }, {
        sequelize,
        modelName: 'GroupTeacherSubjectModel',
        tableName: 'group_teacher_subjects',
        underscored: true
    });
    return GroupTeacherSubjectModel;
};