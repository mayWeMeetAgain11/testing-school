
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TeacherSubjectModel extends Model {

        static associate(models) {
            this.belongsTo(models.TeacherModel, {
                foreignKey: 'teacher_id',
                as: 'teacher'
            }); 
            this.belongsTo(models.SubjectModel, {
                foreignKey: 'subject_id',
                as: 'subject'
            });
            this.hasMany(models.GroupTeacherSubjectModel, {
                foreignKey: 'teacher_subject_id',
                as: 'group_teacher_subjects'
            }); 
        }
    }
    TeacherSubjectModel.init({

    }, {
        sequelize,
        modelName: 'TeacherSubjectModel',
        tableName: 'teacher_subjects',
        underscored: true
    });
    return TeacherSubjectModel;
};