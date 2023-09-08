
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DrivePdfModel extends Model {

        static associate(models) {
            
        }
    }
    DrivePdfModel.init({
        pdf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'DrivePdfModel',
        tableName: 'drive_pdfs',
        underscored: true
    });
    return DrivePdfModel;
};