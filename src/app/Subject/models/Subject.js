
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SubjectModel extends Model {

        static associate(models) {
            this.hasMany(models.TeacherSubjectModel, {
                foreignKey: 'subject_id',
                as: 'teacher_subjects'
            }); 
        }
    }
    SubjectModel.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'SubjectModel',
        tableName: 'subjects',
        underscored: true
    });
    return SubjectModel;
};