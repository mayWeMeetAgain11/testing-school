
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class FeedbackModel extends Model {

        static associate(models) {

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