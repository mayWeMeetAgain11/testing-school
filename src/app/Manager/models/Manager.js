
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ManagerModel extends Model {

        static associate(models) {

        }
    }
    ManagerModel.init({
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        modelName: 'ManagerModel',
        tableName: 'managers',
        underscored: true
    });
    return ManagerModel;
};