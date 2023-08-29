
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ClassModel extends Model {

        static associate(models) {
            this.hasMany(models.GroupModel, {
                foreignKey: 'class_id',
                as: 'groups'
            }); 
        }
    }
    ClassModel.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'ClassModel',
        tableName: 'classes',
        underscored: true
    });
    return ClassModel;
};