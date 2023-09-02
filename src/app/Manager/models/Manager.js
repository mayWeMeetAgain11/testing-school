
const { Model } = require('sequelize');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    class ManagerModel extends Model {
        generateToken(){
            const token = jwt.sign({ id: this.id, user : this.user }, process.env.SECRETKEY);
            return token;
        }

        static associate(models) {
            this.hasMany(models.ManagerNoteModel, {
                foreignKey: 'manager_id',
                as: 'manager_notes'
            }); 
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