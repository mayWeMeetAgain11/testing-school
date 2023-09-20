
const { Model } = require('sequelize');
const { type } = require('./enum.json');

module.exports = (sequelize, DataTypes) => {
    class AssignmentPdfModel extends Model {

        static associate(models) {
            this.belongsTo(models.AssignmentModel, {
                foreignKey: 'assignment_id',
                as: 'assignment'
            });
        }
    }
    AssignmentPdfModel.init({
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
    }, {
        sequelize,
        modelName: 'AssignmentPdfModel',
        tableName: 'assignment_pdfs',
        underscored: true
    });
    return AssignmentPdfModel;
};