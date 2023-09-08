
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class FeedbackModel extends Model {

        static associate(models) {
            this.belongsTo(models.StudentModel, {
                foreignKey: 'student_id',
                as: 'student'
            });
        }
    }
    FeedbackModel.init({
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'FeedbackModel',
        tableName: 'feedbacks',
        underscored: true
    });
    return FeedbackModel;
};